'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';

import * as CFI from 'foliate-js/epubcfi.js';
import { Overlayer } from 'foliate-js/overlayer.js';
import { useEnv } from '@/context/EnvContext';
import { BookNote, BooknoteGroup, HighlightColor, HighlightStyle } from '@/types/book';
import { NOTE_PREFIX } from '@/types/view';
import { NativeTouchEventType } from '@/types/system';
import { getLocale, getOSPlatform, makeSafeFilename, uniqueId } from '@/utils/misc';
import { useThemeStore } from '@/store/themeStore';
import { useBookDataStore } from '@/store/bookDataStore';
import { useSettingsStore } from '@/store/settingsStore';
import { useReaderStore } from '@/store/readerStore';
import { useNotebookStore } from '@/store/notebookStore';
import { useTranslation } from '@/hooks/useTranslation';
import { useResponsiveSize } from '@/hooks/useResponsiveSize';
import { useDeviceControlStore } from '@/store/deviceStore';
import { useFoliateEvents } from '../../hooks/useFoliateEvents';
import { useNotesSync } from '../../hooks/useNotesSync';
import { useTextSelector } from '../../hooks/useTextSelector';
import { Position, TextSelection } from '@/utils/sel';
import { getPopupPosition, getPosition, getTextFromRange } from '@/utils/sel';
import { eventDispatcher } from '@/utils/event';
import { findTocItemBS } from '@/utils/toc';
import { throttle } from '@/utils/throttle';
import { runSimpleCC } from '@/utils/simplecc';
import { getWordCount } from '@/utils/word';
import { isCfiInLocation } from '@/utils/cfi';
import { TransformContext } from '@/services/transformers/types';
import { transformContent } from '@/services/transformService';
import { getHighlightColorHex } from '../../utils/annotatorUtil';
import { annotationToolButtons } from './AnnotationTools';
import AnnotationRangeEditor from './AnnotationRangeEditor';
import AnnotationPopup from './AnnotationPopup';
import WiktionaryPopup from './WiktionaryPopup';
import WikipediaPopup from './WikipediaPopup';
import TranslatorPopup from './TranslatorPopup';
import useShortcuts from '@/hooks/useShortcuts';
import ProofreadPopup from './ProofreadPopup';
import ExportMarkdownDialog from './ExportMarkdownDialog';

const Annotator: React.FC<{ bookKey: string }> = ({ bookKey }) => {
  const _ = useTranslation();
  const { envConfig, appService } = useEnv();
  const { settings } = useSettingsStore();
  const { isDarkMode } = useThemeStore();
  const { getConfig, getBookData, updateBooknotes } = useBookDataStore();
  const config = useBookDataStore((state) => state.getConfig(bookKey));
  const { getProgress, getView, getViewsById, getViewSettings } = useReaderStore();
  const { setNotebookVisible, setNotebookNewAnnotation, setNotebookEditAnnotation } = useNotebookStore();
  const { listenToNativeTouchEvents } = useDeviceControlStore();

  useNotesSync(bookKey);

  const osPlatform = getOSPlatform();
  const progress = getProgress(bookKey)!;
  const bookData = getBookData(bookKey)!;
  const view = getView(bookKey);
  const viewSettings = getViewSettings(bookKey)!;
  const primaryLang = bookData.book?.primaryLanguage || 'en';

  const containerRef = React.useRef<HTMLDivElement>(null);

  const [selection, setSelection] = useState<TextSelection | null>(null);
  const [showAnnotPopup, setShowAnnotPopup] = useState(false);
  const [showWiktionaryPopup, setShowWiktionaryPopup] = useState(false);
  const [showWikipediaPopup, setShowWikipediaPopup] = useState(false);
  const [showDeepLPopup, setShowDeepLPopup] = useState(false);
  const [showProofreadPopup, setShowProofreadPopup] = useState(false);
  const [trianglePosition, setTrianglePosition] = useState<Position>();
  const [annotPopupPosition, setAnnotPopupPosition] = useState<Position>();
  const [dictPopupPosition, setDictPopupPosition] = useState<Position>();
  const [translatorPopupPosition, setTranslatorPopupPosition] = useState<Position>();
  const [proofreadPopupPosition, setProofreadPopupPosition] = useState<Position>();
  const [highlightOptionsVisible, setHighlightOptionsVisible] = useState(false);
  const [showAnnotationNotes, setShowAnnotationNotes] = useState(false);
  const [annotationNotes, setAnnotationNotes] = useState<BookNote[]>([]);
  const [editingAnnotation, setEditingAnnotation] = useState<BookNote | null>(null);
  const [showExportDialog, setShowExportDialog] = useState(false);
  const [exportData, setExportData] = useState<{
    booknotes: BookNote[];
    booknoteGroups: { [href: string]: BooknoteGroup };
  } | null>(null);

  const [selectedStyle, setSelectedStyle] = useState<HighlightStyle>(
    settings.globalReadSettings.highlightStyle,
  );
  const [selectedColor, setSelectedColor] = useState<HighlightColor>(
    settings.globalReadSettings.highlightStyles[selectedStyle],
  );

  const showingPopup =
    showAnnotPopup ||
    showWiktionaryPopup ||
    showWikipediaPopup ||
    showDeepLPopup ||
    showProofreadPopup;

  const popupPadding = useResponsiveSize(10);
  const trianglePadding = popupPadding * 2 + 6;
  const maxWidth = window.innerWidth - 2 * popupPadding;
  const maxHeight = window.innerHeight - 2 * popupPadding;
  const dictPopupWidth = Math.min(480, maxWidth);
  const dictPopupHeight = Math.min(300, maxHeight);
  const transPopupWidth = Math.min(480, maxWidth);
  const transPopupHeight = Math.min(265, maxHeight);
  const proofreadPopupWidth = Math.min(440, maxWidth);
  const proofreadPopupHeight = Math.min(200, maxHeight);
  const annotPopupWidth = Math.min(useResponsiveSize(300), maxWidth);
  const annotPopupHeight = useResponsiveSize(44);
  const androidSelectionHandlerHeight = 0;

  // Reposition popups on scroll without dismissing them
  const repositionPopups = useCallback(() => {
    if (!selection || !selection.text) return;
    const gridFrame = document.querySelector(`#gridcell-${bookKey}`);
    if (!gridFrame) return;
    const rect = gridFrame.getBoundingClientRect();
    const triangPos = getPosition(selection, rect, trianglePadding, viewSettings.vertical);
    const annotPopupPos = getPopupPosition(
      triangPos,
      rect,
      viewSettings.vertical ? annotPopupHeight : annotPopupWidth,
      viewSettings.vertical ? annotPopupWidth : annotPopupHeight,
      popupPadding,
    );
    if (annotPopupPos.dir === 'down' && osPlatform === 'android') {
      triangPos.point.y += androidSelectionHandlerHeight;
      annotPopupPos.point.y += androidSelectionHandlerHeight;
    }
    const dictPopupPos = getPopupPosition(
      triangPos,
      rect,
      dictPopupWidth,
      dictPopupHeight,
      popupPadding,
    );
    const transPopupPos = getPopupPosition(
      triangPos,
      rect,
      transPopupWidth,
      transPopupHeight,
      popupPadding,
    );
    const proofreadPopupPos = getPopupPosition(
      triangPos,
      rect,
      proofreadPopupWidth,
      proofreadPopupHeight,
      popupPadding,
    );
    if (triangPos.point.x == 0 || triangPos.point.y == 0) return;
    setAnnotPopupPosition(annotPopupPos);
    setDictPopupPosition(dictPopupPos);
    setTranslatorPopupPosition(transPopupPos);
    setProofreadPopupPosition(proofreadPopupPos);
    setTrianglePosition(triangPos);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selection, bookKey, viewSettings.vertical]);

  useEffect(() => {
    setSelectedStyle(settings.globalReadSettings.highlightStyle);
  }, [settings.globalReadSettings.highlightStyle]);

  useEffect(() => {
    setSelectedColor(settings.globalReadSettings.highlightStyles[selectedStyle]);
  }, [settings.globalReadSettings.highlightStyles, selectedStyle]);

  const transformCtx: TransformContext = useMemo(
    () => ({
      bookKey,
      viewSettings: getViewSettings(bookKey)!,
      userLocale: getLocale(),
      content: '',
      transformers: ['punctuation'],
      reversePunctuationTransform: true,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const getAnnotationText = useCallback(
    async (range: Range) => {
      transformCtx['content'] = getTextFromRange(range, primaryLang.startsWith('ja') ? ['rt'] : []);
      return await transformContent(transformCtx);
    },
    [primaryLang, transformCtx],
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleDismissPopup = useCallback(
    throttle(() => {
      setSelection(null);
      setShowAnnotPopup(false);
      // Ensure note UI state is fully reset so bubbles reappear when popup closes
      setShowAnnotationNotes(false);
      setShowWiktionaryPopup(false);
      setShowWikipediaPopup(false);
      setShowDeepLPopup(false);
      setShowProofreadPopup(false);
      setEditingAnnotation(null);
    }, 500),
    [],
  );

  const {
    isTextSelected,
    handleScroll,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    handlePointerDown,
    handlePointerMove,
    handlePointerCancel,
    handlePointerUp,
    handleSelectionchange,
    handleShowPopup,
    handleUpToPopup,
    handleContextmenu,
  } = useTextSelector(bookKey, setSelection, getAnnotationText, handleDismissPopup);

  const handleDismissPopupAndSelection = () => {
    handleDismissPopup();
    view?.deselect();
    isTextSelected.current = false;
  };

  const onLoad = (event: Event) => {
    const detail = (event as CustomEvent).detail;
    const { doc, index } = detail;

    const handleTouchmove = (ev: TouchEvent) => {
      // Available on iOS, on Android not fired
      // To make the popup not follow the selection while dragging
      setShowAnnotPopup(false);
      setEditingAnnotation(null);
      handleTouchMove(ev);
    };

    const handleNativeTouch = (event: CustomEvent) => {
      const ev = event.detail as NativeTouchEventType;
      if (ev.type === 'touchstart') {
        handleTouchStart();
      } else if (ev.type === 'touchend') {
        handleTouchEnd();
        handlePointerUp(doc, index);
      }
    };

    if (appService?.isAndroidApp) {
      listenToNativeTouchEvents();
      eventDispatcher.on('native-touch', handleNativeTouch);
    }

    // Attach generic selection listeners for all formats, including PDF.
    // For PDF we only guarantee Copy & Translate; highlight/annotate may be limited by CFI support.
    view?.renderer?.addEventListener('scroll', handleScroll);
    // Reposition popups on scroll to keep them in view
    view?.renderer?.addEventListener('scroll', () => {
      repositionPopups();
    });
    const opts = { passive: false };
    detail.doc?.addEventListener('touchstart', handleTouchStart, opts);
    detail.doc?.addEventListener('touchmove', handleTouchmove, opts);
    detail.doc?.addEventListener('touchend', handleTouchEnd);
    detail.doc?.addEventListener('pointerdown', handlePointerDown.bind(null, doc, index), opts);
    detail.doc?.addEventListener('pointermove', handlePointerMove.bind(null, doc, index), opts);
    detail.doc?.addEventListener('pointercancel', handlePointerCancel.bind(null, doc, index));
    detail.doc?.addEventListener('pointerup', handlePointerUp.bind(null, doc, index));
    detail.doc?.addEventListener('selectionchange', handleSelectionchange.bind(null, doc, index));

    // For PDF selections, enable right-click context menu to directly open translator popup.
    if (bookData.book?.format === 'PDF') {
      detail.doc?.addEventListener('contextmenu', (e: Event) => {
        try {
          const sel = doc.getSelection?.();
          if (sel && !sel.isCollapsed) {
            const range = sel.getRangeAt(0);
            const text = sel.toString();
            if (text.trim()) {
              setSelection({ key: bookKey, text, range, index, cfi: view?.getCFI(index, range) });
              // Show translation popup preferentially for PDF right-click
              setShowAnnotPopup(false);
              setShowDeepLPopup(true);
              setShowWiktionaryPopup(false);
              setShowWikipediaPopup(false);
            }
          }
        } catch (err) {
          console.warn('PDF context menu translation failed:', err);
        }
        // Prevent native menu to keep experience consistent
        e.preventDefault();
        e.stopPropagation();
        return false;
      });
    }

    // Disable the default context menu on mobile devices (selection handles suffice)
    detail.doc?.addEventListener('contextmenu', handleContextmenu);
  };

  const onDrawAnnotation = (event: Event) => {
    const viewSettings = getViewSettings(bookKey)!;
    const isEink = viewSettings.isEink;
    const detail = (event as CustomEvent).detail;
    const { draw, annotation, doc, range } = detail;
    const { style, color } = annotation as BookNote;
    const hexColor = getHighlightColorHex(settings, color);
    const einkBgColor = isDarkMode ? '#000000' : '#ffffff';
    const einkFgColor = isDarkMode ? '#ffffff' : '#000000';

    const isNoteOverlay = Boolean((annotation as any).value && (annotation as any).value.startsWith(NOTE_PREFIX));

    // Prepare style options when applicable
    let styleOptions: any = null;
    if (style === 'highlight') {
      styleOptions = { color: isEink ? einkBgColor : hexColor };
    } else if (['underline', 'squiggly'].includes(style as string)) {
      const { defaultView } = doc;
      const node = range.startContainer;
      const el = node.nodeType === 1 ? node : node.parentElement;
      const { writingMode, lineHeight, fontSize } = defaultView.getComputedStyle(el);
      const fontSizeValue = parseFloat(fontSize) || viewSettings.defaultFontSize;
      const lineHeightValue = parseFloat(lineHeight) || viewSettings.lineHeight * fontSizeValue;
      const strokeWidth = 2;
      const verticalCompensation = appService?.isMobile ? 0 : -1;
      const horizontalCompensation = appService?.isMobile ? -1 : 0;
      const padding = viewSettings.vertical
        ? (lineHeightValue - fontSizeValue) / 2 - strokeWidth + verticalCompensation
        : (lineHeightValue - fontSizeValue) / 2 - strokeWidth + horizontalCompensation;
      styleOptions = { writingMode, color: isEink ? einkFgColor : hexColor, padding };
    }

    // If this draw call is for a NOTE overlay, draw only the bubble (so style overlay
    // can be a separate overlay and handle style interactions). If the annotation
    // popup is visible for this CFI, hide the bubble to avoid duplicate UI (popup
    // will serve as the UI).
    if (isNoteOverlay) {
      const { defaultView } = doc;
      const node = range.startContainer;
      const el = node.nodeType === 1 ? node : node.parentElement;
      const { writingMode } = defaultView.getComputedStyle(el);
      // Only hide the bubble when the note *popup* is actually open for this CFI.
      // Previously we hid it as soon as `showAnnotationNotes` flipped, which caused a
      // brief flicker because the popup wasn't yet visible. Require `showAnnotPopup`
      // to avoid that transient disappearance.
      if (showAnnotationNotes && showAnnotPopup && selection?.cfi === (annotation.cfi as string)) {
        // Render an empty group (hide bubble) when the note popup is shown for this CFI
        draw(() => document.createElementNS('http://www.w3.org/2000/svg', 'g'));
        return;
      }
      // Draw bubble only
      draw(Overlayer.bubble, { writingMode });
      return;
    }

    // Otherwise this is the style overlay
    if (styleOptions) {
      const safeStyle = (style ?? 'highlight') as NonNullable<BookNote['style']>;

      // If the note popup is visible for this CFI, hide the style overlay to avoid
      // duplicate UI (we want only one visible at a time when the note panel is open).
      // Require the popup (`showAnnotPopup`) to be actually shown to avoid flicker when
      // `showAnnotationNotes` flips before the popup is mounted.
      if (showAnnotationNotes && showAnnotPopup && selection?.cfi === (annotation.cfi as string)) {
        draw(() => document.createElementNS('http://www.w3.org/2000/svg', 'g'));
        return;
      }

      // If the highlight options panel is shown for this CFI, add an outline to
      // visually indicate the editing state.
      if (highlightOptionsVisible && selection?.cfi === (annotation.cfi as string)) {
        draw((rects: any[]) => {
          const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
          const base = (Overlayer as any)[safeStyle](rects, styleOptions);
          g.appendChild(base);
          if (safeStyle === 'highlight') {
            const outline = Overlayer.outline(rects, { color: isEink ? einkBgColor : hexColor, width: 2 });
            g.appendChild(outline);
          } else if (safeStyle === 'underline' || safeStyle === 'squiggly') {
            const topStyle = (Overlayer as any)[safeStyle](rects, styleOptions);
            g.appendChild(topStyle);
          }
          return g;
        });
      } else {
        if (safeStyle === 'highlight') {
          draw(Overlayer.highlight, styleOptions);
        } else {
          draw(Overlayer[safeStyle], styleOptions);
        }
      }
      return;
    }

    // Fallback: if there's a note without style, draw only the bubble
    if (annotation.note && !styleOptions) {
      const { defaultView } = doc;
      const node = range.startContainer;
      const el = node.nodeType === 1 ? node : node.parentElement;
      const { writingMode } = defaultView.getComputedStyle(el);
      draw(Overlayer.bubble, { writingMode });
    }
  };

  const onShowAnnotation = (event: Event) => {
    const detail = (event as CustomEvent).detail;
    const { value, index, range } = detail;
    const booknotes = config?.booknotes || [];
    const isNote = value.startsWith(NOTE_PREFIX);
    const cfi = isNote ? value.replace(NOTE_PREFIX, '') : value;
    const annotations = booknotes.filter(
      (booknote) => booknote.type === 'annotation' && !booknote.deletedAt && booknote.cfi === cfi,
    );
    const annotation = annotations.find(
      (annotation) => (!isNote && annotation.style) || (isNote && annotation.note),
    );
    if (!annotation) return;

    const { style, color, text, note } = annotation;
    const selection = {
      key: bookKey,
      annotated: true,
      text: text ?? '',
      note: note ?? '',
      rect: detail.rect,
      cfi,
      range,
      index,
    };
    if (isNote) {
      // Clicking the bubble should show the note UI only (hide style editor)
      setShowAnnotationNotes(true);
      setAnnotationNotes(annotations.filter((item) => item.note && item.note.trim().length > 0));
      setEditingAnnotation(null);
      setHighlightOptionsVisible(false);
    } else {
      // Clicking the style overlay should open the style editor (hide note UI)
      setShowAnnotationNotes(false);
      setAnnotationNotes([]);
      if (style && color) {
        setSelectedStyle(style);
        setSelectedColor(color);
      }
      if (style && range) {
        setEditingAnnotation(annotation);
        setHighlightOptionsVisible(true);
      }
    }
    setSelection(selection);
    handleUpToPopup();
  };

  useFoliateEvents(view, { onLoad, onDrawAnnotation, onShowAnnotation });

  useEffect(() => {
    handleShowPopup(showingPopup);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showingPopup]);

  // When popups are visible, update their positions on scroll events
  useEffect(() => {
    const view = getView(bookKey);
    if (!view?.renderer) return;
    const onScroll = () => {
      if (showingPopup) {
        repositionPopups();
      }
    };
    view.renderer.addEventListener('scroll', onScroll);
    return () => {
      view.renderer.removeEventListener('scroll', onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookKey, showingPopup, repositionPopups]);

  useEffect(() => {
    eventDispatcher.on('export-annotations', handleExportMarkdown);
    // Hide annotation popup when notebook editor opens (or any other caller requests it)
    eventDispatcher.on('hide-annotation-popup', handleDismissPopup);
    return () => {
      eventDispatcher.off('export-annotations', handleExportMarkdown);
      eventDispatcher.off('hide-annotation-popup', handleDismissPopup);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleQuickAction = () => {
    const action = viewSettings.annotationQuickAction;
    switch (action) {
      case 'copy':
        handleCopy(false);
        handleDismissPopupAndSelection();
        break;
      case 'highlight':
        // highlight is already applied in instant annotating
        handleDismissPopupAndSelection();
        break;
      case 'search':
        handleSearch();
        break;
      case 'dictionary':
        handleDictionary();
        break;
      case 'wikipedia':
        handleWikipedia();
        break;
      case 'translate':
        handleTranslation();
        break;
      case 'tts':
        handleSpeakText(true);
        break;
    }
  };

  useEffect(() => {
    setHighlightOptionsVisible(!!(selection && selection.annotated));
    if (selection && selection.text.trim().length > 0) {
      const gridFrame = document.querySelector(`#gridcell-${bookKey}`);
      if (!gridFrame) return;
      const rect = gridFrame.getBoundingClientRect();
      const triangPos = getPosition(selection, rect, trianglePadding, viewSettings.vertical);
      const annotPopupPos = getPopupPosition(
        triangPos,
        rect,
        viewSettings.vertical ? annotPopupHeight : annotPopupWidth,
        viewSettings.vertical ? annotPopupWidth : annotPopupHeight,
        popupPadding,
      );
      if (annotPopupPos.dir === 'down' && osPlatform === 'android') {
        triangPos.point.y += androidSelectionHandlerHeight;
        annotPopupPos.point.y += androidSelectionHandlerHeight;
      }
      const dictPopupPos = getPopupPosition(
        triangPos,
        rect,
        dictPopupWidth,
        dictPopupHeight,
        popupPadding,
      );
      const transPopupPos = getPopupPosition(
        triangPos,
        rect,
        transPopupWidth,
        transPopupHeight,
        popupPadding,
      );
      const proofreadPopupPos = getPopupPosition(
        triangPos,
        rect,
        proofreadPopupWidth,
        proofreadPopupHeight,
        popupPadding,
      );
      if (triangPos.point.x == 0 || triangPos.point.y == 0) return;
      setAnnotPopupPosition(annotPopupPos);
      setDictPopupPosition(dictPopupPos);
      setTranslatorPopupPosition(transPopupPos);
      setProofreadPopupPosition(proofreadPopupPos);
      setTrianglePosition(triangPos);

      const { enableAnnotationQuickActions, annotationQuickAction } = viewSettings;
      if (enableAnnotationQuickActions && annotationQuickAction && isTextSelected.current) {
        handleQuickAction();
      } else {
        handleShowAnnotPopup();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selection, bookKey]);

  // Track which annotations are currently rendered in the views to perform
  // incremental updates (avoid full clear/readd that causes flicker).
  const displayedAnnotationsRef = React.useRef<Set<string>>(new Set());

  // Listen to immediate apply/remove events so we can update overlays and
  // our displayedAnnotationsRef without waiting for async central file reloads.
  useEffect(() => {
    const applyHandler = (payload: any) => {
      try {
        const { annotation } = payload || {};
        if (!annotation || annotation.type !== 'annotation' || annotation.deletedAt) return;
        // Only apply if within current progress location
        if (!progress) return;
        if (!isCfiInLocation(annotation.cfi, progress.location)) return;
        const views = getViewsById(bookKey.split('-')[0]!);
        // Add style overlay
        try {
          views.forEach((v) => v?.addAnnotation(annotation));
          if (annotation.note && annotation.note.trim()) {
            views.forEach((v) => v?.addAnnotation({ ...annotation, value: `${NOTE_PREFIX}${annotation.cfi}` }));
          }
          displayedAnnotationsRef.current.add(annotation.id);
        } catch (e) {
          console.warn('Failed to apply annotation from event', e);
        }
      } catch (e) {
        // ignore
      }
    };

    const removeHandler = (payload: any) => {
      try {
        const { id } = payload || {};
        if (!id) return;
        const views = getViewsById(bookKey.split('-')[0]!);
        const toRemove = (config?.booknotes || []).find((n) => n.id === id) || ({ id } as any);
        try {
          views.forEach((v) => v?.addAnnotation({ ...toRemove, value: `${NOTE_PREFIX}${toRemove.cfi}` }, true));
          views.forEach((v) => v?.addAnnotation(toRemove, true));
        } catch (e) {
          // ignore
        }
        displayedAnnotationsRef.current.delete(id);
      } catch (e) {
        // ignore
      }
    };

    eventDispatcher.on('annotation-applied', applyHandler);
    eventDispatcher.on('annotation-removed', removeHandler);
    return () => {
      eventDispatcher.off('annotation-applied', applyHandler);
      eventDispatcher.off('annotation-removed', removeHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookKey, progress, config?.booknotes]);

  useEffect(() => {
    if (!progress) return;
    const { location } = progress;

    const booknotes = config?.booknotes || [];
    const visible = booknotes.filter(
      (item) => !item.deletedAt && item.type === 'annotation' && isCfiInLocation(item.cfi, location),
    );
    const visibleIds = new Set(visible.map((v) => v.id));
    const views = getViewsById(bookKey.split('-')[0]!);

    // Remove annotations that are currently displayed but no longer visible
    for (const id of Array.from(displayedAnnotationsRef.current)) {
      if (!visibleIds.has(id)) {
        const toRemove = booknotes.find((n) => n.id === id);
        if (toRemove) {
          views.forEach((v) => {
            try {
              v?.addAnnotation(toRemove, true);
              v?.addAnnotation({ ...toRemove, value: `${NOTE_PREFIX}${toRemove.cfi}` }, true);
            } catch (e) {
              // ignore
            }
          });
        }
        displayedAnnotationsRef.current.delete(id);
      }
    }

    // Add visible annotations that are not yet displayed
    for (const item of visible) {
      if (displayedAnnotationsRef.current.has(item.id)) continue;
      try {
        if (item.note && item.note.trim().length > 0 && item.style) {
          views.forEach((v) => v?.addAnnotation(item));
          views.forEach((v) => v?.addAnnotation({ ...item, value: `${NOTE_PREFIX}${item.cfi}` }));
        } else if (item.note && item.note.trim().length > 0) {
          views.forEach((v) => v?.addAnnotation({ ...item, value: `${NOTE_PREFIX}${item.cfi}` }));
        } else if (item.style) {
          views.forEach((v) => v?.addAnnotation(item));
        }
        displayedAnnotationsRef.current.add(item.id);
      } catch (e) {
        console.warn('Failed to add annotation during relocate update', e);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progress, config?.booknotes]);

  useEffect(() => {
    if (!config?.booknotes || !selection?.cfi || !showAnnotationNotes) return;
    const annotations = config.booknotes.filter(
      (booknote) => booknote.type === 'annotation' && !booknote.deletedAt && booknote.cfi === selection.cfi,
    );
    const notes = annotations.filter((item) => item.note && item.note.trim().length > 0);
    setAnnotationNotes(notes);
  }, [selection?.cfi, showAnnotationNotes, config?.booknotes]);

  // When the 'showAnnotationNotes' state changes for a particular CFI, force a
  // redraw of the NOTE overlay(s) for that CFI so the draw callback (which
  // conditionally hides the bubble when the popup is visible) takes effect.
  useEffect(() => {
    if (!selection?.cfi) return;
    const notes = config?.booknotes?.filter(
      (item) => item.type === 'annotation' && !item.deletedAt && item.note && item.cfi === selection.cfi,
    );
    if (!notes || notes.length === 0) return;
    const views = getViewsById(bookKey.split('-')[0]!);
    for (const item of notes) {
      views.forEach((view) => view?.addAnnotation({ ...item, value: `${NOTE_PREFIX}${item.cfi}` }));
    }
  }, [showAnnotationNotes, selection?.cfi, config?.booknotes, progress]);

  const handleShowAnnotPopup = () => {
    if (!appService?.isMobile) {
      containerRef.current?.focus();
    }
    setShowAnnotPopup(true);
    setShowDeepLPopup(false);
    setShowWiktionaryPopup(false);
    setShowWikipediaPopup(false);
  };

  const handleCopy = async (dismissPopup = true, update = false) => {
    if (!selection || !selection.text) return;
    setTimeout(() => {
      // Delay to ensure it won't be overridden by system clipboard actions
      navigator.clipboard?.writeText(selection.text);
    }, 100);
    if (dismissPopup) {
      handleDismissPopupAndSelection();
    }

    if (!viewSettings?.copyToNotebook) return;

    eventDispatcher.dispatch('toast', {
      type: 'info',
      message: _('Copied to notebook'),
      className: 'whitespace-nowrap',
      timeout: 2000,
    });

    const annotations = config?.booknotes ? [...config.booknotes] : [];
    const cfi = view?.getCFI(selection.index, selection.range);
    if (!cfi) return;
    const annotation: BookNote = {
      id: uniqueId(),
      type: 'excerpt',
      cfi,
      text: selection.text,
      note: '',
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };

    const existingIndex = annotations.findIndex(
      (annotation) =>
        annotation.cfi === cfi && annotation.type === 'excerpt' && !annotation.deletedAt,
    );

    // ensure we have views for this book
    const bookHash = bookKey.split('-')[0]!;
    const views = getViewsById(bookHash);

    if (existingIndex !== -1) {
      const existing = annotations[existingIndex]!;
      const mergePreserveNote = (existing: any, annotation: any, extra: any = {}) => {
        const merged = { ...existing, ...annotation, ...extra, id: existing.id };
        // preserve existing.note if incoming annotation has empty note
        if (annotation.note === '' || annotation.note === undefined || (typeof annotation.note === 'string' && annotation.note.trim() === '')) {
          merged.note = existing.note;
        }
        // preserve createdAt if exists
        if (!merged.createdAt && existing.createdAt) merged.createdAt = existing.createdAt;
        return merged;
      };

      if (!existing.style && !update) {
        // existing has no style and user attempted to toggle off highlight — ignore
      } else if (!existing.style && update) {
        // merging style into a note-only annotation
        const merged = mergePreserveNote(existing, annotation, { createdAt: existing.createdAt || annotation.createdAt });
        annotations[existingIndex] = merged;
        views.forEach((view) => view?.addAnnotation(merged));
        if (merged.note && merged.note.trim()) {
          views.forEach((view) => view?.addAnnotation({ ...merged, value: `${NOTE_PREFIX}${merged.cfi}` }));
        }
      } else {
        // existing has style; follow previous toggle/update behaviour
        if (update) {
          const merged = mergePreserveNote(existing, annotation, { updatedAt: Date.now() });
          annotations[existingIndex] = merged;
          views.forEach((view) => view?.addAnnotation(merged));
        } else {
          annotations[existingIndex]!.deletedAt = Date.now();
          // Immediately remove both overlays (style and note bubble) so UI updates
          const deleted = annotations[existingIndex]!;
          views.forEach((view) => {
            view?.addAnnotation(deleted, true);
            view?.addAnnotation({ ...deleted, value: `${NOTE_PREFIX}${deleted.cfi}` }, true);
          });
          handleDismissPopup();
        }
      }
    } else {
      annotations.push(annotation);
      views.forEach((view) => view?.addAnnotation(annotation));
      setSelection({ ...selection, cfi, annotated: true });
    }
    const updatedConfig = updateBooknotes(bookKey, annotations);
    if (updatedConfig) {
      const bookTitle = getBookData(bookKey)?.book?.title;
      import('@/services/notesService')
        .then((m) => m.saveNotesForBook(envConfig, bookHash, annotations, bookTitle, config?.metaHash))
        .then(() => eventDispatcher.dispatch('notes-updated', { bookHash }))
        .catch((e) => console.error('Failed to persist excerpt notes to central file', e));
    }
    if (!appService?.isMobile) {
      setNotebookVisible(true);
    }
  };

  const handleHighlight = async (update = false, highlightStyle?: HighlightStyle) => {
    if (!selection || !selection.text) return;
    setHighlightOptionsVisible(true);

    const cfi = view?.getCFI(selection.index, selection.range);
    if (!cfi) return;

    const style = highlightStyle || settings.globalReadSettings.highlightStyle;
    const color = settings.globalReadSettings.highlightStyles[style];

    const annotation: BookNote = {
      id: uniqueId(),
      type: 'annotation',
      cfi,
      style,
      color,
      text: selection.text,
      note: '',
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };

    const bookHash = bookKey.split('-')[0]!;
    const notesService = await import('@/services/notesService');

    // Use in-memory booknotes as the single render source
    let annotations: BookNote[] = config?.booknotes ? [...config.booknotes] : [];

    const existingIndex = annotations.findIndex(
      (ann) => ann.cfi === cfi && ann.type === 'annotation' && !ann.deletedAt,
    );

    const views = getViewsById(bookHash);

    const mergePreserveNote = (existing: any, annotation: any, extra: any = {}) => {
      const merged = { ...existing, ...annotation, ...extra, id: existing.id };
      if (annotation.note === '' || annotation.note === undefined || (typeof annotation.note === 'string' && annotation.note.trim() === '')) {
        merged.note = existing.note;
      }
      if (!merged.createdAt && existing.createdAt) merged.createdAt = existing.createdAt;
      return merged;
    };

    if (existingIndex !== -1) {
      const existing = annotations[existingIndex]!;

      if (!existing.style && !update) {
        // existing has no style and user attempted to toggle off highlight — ignore
      } else if (!existing.style && update) {
        // merging style into a note-only annotation
        const merged = mergePreserveNote(existing, annotation, { createdAt: existing.createdAt || annotation.createdAt });
        annotations[existingIndex] = merged;
        views.forEach((view) => view?.addAnnotation(merged));
        if (merged.note && merged.note.trim()) {
          views.forEach((view) => view?.addAnnotation({ ...merged, value: `${NOTE_PREFIX}${merged.cfi}` }));
        }
      } else {
        // existing has style; follow previous toggle/update behaviour
        if (update) {
          const merged = mergePreserveNote(existing, annotation, { updatedAt: Date.now() });
          annotations[existingIndex] = merged;
          views.forEach((view) => view?.addAnnotation(merged));
        } else {
          annotations[existingIndex]!.deletedAt = Date.now();
          // Immediately remove both overlays (style and note bubble) so UI updates
          const deleted = annotations[existingIndex]!;
          views.forEach((view) => {
            view?.addAnnotation(deleted, true);
            view?.addAnnotation({ ...deleted, value: `${NOTE_PREFIX}${deleted.cfi}` }, true);
          });
          handleDismissPopup();
        }
      }
    } else {
      // create a new annotation
      annotations.push(annotation);
      views.forEach((view) => view?.addAnnotation(annotation));
      setSelection({ ...selection, cfi, annotated: true });
    }

    try {
      const bookTitle = getBookData(bookKey)?.book?.title;
      await notesService.saveNotesForBook(envConfig, bookHash, annotations, bookTitle, getConfig(bookKey)?.metaHash);
      updateBooknotes(bookKey, annotations);
      eventDispatcher.dispatch('notes-updated', { bookHash });
    } catch (e) {
      console.error('Failed to persist highlight notes to central file', e);
    }
  };

  const handleAnnotate = () => {
    if (!selection || !selection.text) return;
    const { sectionHref: href } = progress;
    selection.href = href;
    // If there's already an annotation for this CFI, open it for edit instead of creating new
    const config = getConfig(bookKey);
    const annotations = config?.booknotes ? [...config.booknotes] : [];
    const existing = annotations.find(
      (a) => a.type === 'annotation' && !a.deletedAt && a.cfi === selection.cfi,
    );
    // ensure any floating annotation popup is hidden so notebook editor is interactive
    eventDispatcher.dispatch('hide-annotation-popup');
    setNotebookVisible(true);
    if (existing) {
      setNotebookEditAnnotation(existing);
    } else {
      setNotebookNewAnnotation(selection);
    }
    handleDismissPopup();
  };

  const handleSearch = () => {
    if (!selection || !selection.text) return;
    handleDismissPopupAndSelection();

    let term = selection.text;
    const convertChineseVariant = viewSettings.convertChineseVariant;
    if (convertChineseVariant && convertChineseVariant !== 'none') {
      term = runSimpleCC(term, convertChineseVariant, true);
    }
    eventDispatcher.dispatch('search-term', { term, bookKey });
  };

  const handleDictionary = () => {
    if (!selection || !selection.text) return;
    setShowAnnotPopup(false);
    setShowWiktionaryPopup(true);
  };

  const handleWikipedia = () => {
    if (!selection || !selection.text) return;
    setShowAnnotPopup(false);
    setShowWikipediaPopup(true);
  };

  const handleTranslation = () => {
    if (!selection || !selection.text) return;
    setShowAnnotPopup(false);
    setShowDeepLPopup(true);
  };

  const handleSpeakText = async (oneTime = false) => {
    if (!selection || !selection.text) return;
    setShowAnnotPopup(false);
    eventDispatcher.dispatch('tts-speak', { bookKey, range: selection.range, oneTime });
  };

  const handleProofread = () => {
    if (!selection || !selection.text) return;
    setShowAnnotPopup(false);
    setShowProofreadPopup(true);

    if (getWordCount(selection.text) > 30) {
      eventDispatcher.dispatch('toast', {
        type: 'warning',
        message: _('Word limit of 30 words exceeded.'),
        timeout: 3000,
      });
      return;
    }
  };

  const handleStartEditAnnotation = useCallback(() => {
    setShowAnnotPopup(false);
  }, []);

  // Keyboard shortcuts: trigger actions only if there's an active selection and popup hidden
  useShortcuts(
    {
      onHighlightSelection: () => {
        handleHighlight(false, 'highlight');
      },
      onUnderlineSelection: () => {
        handleHighlight(false, 'underline');
      },
      onAnnotateSelection: () => {
        handleAnnotate();
      },
      onSearchSelection: () => {
        handleSearch();
      },
      onCopySelection: () => {
        handleCopy(false);
      },
      onTranslateSelection: () => {
        handleTranslation();
      },
      onDictionarySelection: () => {
        handleDictionary();
      },
      onWikipediaSelection: () => {
        handleWikipedia();
      },
      onReadAloudSelection: () => {
        handleSpeakText();
      },
      onProofreadSelection: () => {
        handleProofread();
      },
    },
    [selection?.text],
  );

  const handleExportMarkdown = async (event: CustomEvent) => {
    const { bookKey: exportBookKey } = event.detail;
    if (bookKey !== exportBookKey) return;

    const { bookDoc, book } = bookData;
    if (!bookDoc || !book || !bookDoc.toc) return;

    const config = getConfig(bookKey)!;
    const allNotes = config?.booknotes ?? [];
    const booknotes = allNotes.filter((note) => !note.deletedAt);
    if (booknotes.length === 0) {
      eventDispatcher.dispatch('toast', {
        type: 'info',
        message: _('No annotations to export'),
        className: 'whitespace-nowrap',
        timeout: 2000,
      });
      return;
    }

    // Organize booknotes into groups by chapter
    const booknoteGroups: { [href: string]: BooknoteGroup } = {};
    for (const booknote of booknotes) {
      const tocItem = findTocItemBS(bookDoc.toc ?? [], booknote.cfi);
      const href = tocItem?.href || '';
      const label = tocItem?.label || '';
      const id = tocItem?.id || 0;
      if (!booknoteGroups[href]) {
        booknoteGroups[href] = { id, href, label, booknotes: [] };
      }
      booknoteGroups[href].booknotes.push(booknote);
    }

    Object.values(booknoteGroups).forEach((group) => {
      group.booknotes.sort((a, b) => {
        return CFI.compare(a.cfi, b.cfi);
      });
    });

    setExportData({ booknotes, booknoteGroups });
    setShowExportDialog(true);
  };

  const handleConfirmExport = async (markdownContent: string) => {
    const { book } = bookData;
    if (!book) return;

    setTimeout(() => {
      // Delay to ensure it won't be overridden by system clipboard actions
      navigator.clipboard?.writeText(markdownContent);
    }, 100);

    const filename = `${makeSafeFilename(book.title)}.md`;
    const saved = await appService?.saveFile(filename, markdownContent, 'text/markdown');
    eventDispatcher.dispatch('toast', {
      type: 'info',
      message: saved ? _('Exported successfully') : _('Copied to clipboard'),
      timeout: 2000,
    });

    setShowExportDialog(false);
    setExportData(null);
  };

  const handleCancelExport = () => {
    setShowExportDialog(false);
    setExportData(null);
  };

  const selectionAnnotated = selection?.annotated;
  const toolButtons = annotationToolButtons.map(({ type, label, Icon }) => {
    switch (type) {
      case 'copy':
        return { tooltipText: _(label), Icon, onClick: handleCopy };
      case 'highlight':
        return {
          tooltipText: selectionAnnotated ? _('Delete Highlight') : _(label),
          Icon: selectionAnnotated ? RiDeleteBinLine : Icon,
          onClick: handleHighlight,
          disabled: bookData.book?.format === 'PDF',
        };
      case 'annotate':
        return {
          tooltipText: _(label),
          Icon,
          onClick: handleAnnotate,
          disabled: bookData.book?.format === 'PDF',
        };
      case 'search':
        return {
          tooltipText: _(label),
          Icon,
          onClick: handleSearch,
          disabled: bookData.book?.format === 'PDF',
        };
      case 'dictionary':
        return { tooltipText: _(label), Icon, onClick: handleDictionary };
      case 'wikipedia':
        return { tooltipText: _(label), Icon, onClick: handleWikipedia };
      case 'translate':
        return { tooltipText: _(label), Icon, onClick: handleTranslation };
      case 'tts':
        return {
          tooltipText: _(label),
          Icon,
          onClick: handleSpeakText,
          disabled: bookData.book?.format === 'PDF',
        };
      case 'proofread':
        return {
          tooltipText: _(label),
          Icon,
          onClick: handleProofread,
          disabled: bookData.book?.format !== 'EPUB',
        };
      default:
        return { tooltipText: '', Icon, onClick: () => { } };
    }
  });

  return (
    <div ref={containerRef} role='toolbar' tabIndex={-1}>
      {showWiktionaryPopup && trianglePosition && dictPopupPosition && (
        <WiktionaryPopup
          word={selection?.text as string}
          lang={bookData.bookDoc?.metadata.language as string}
          position={dictPopupPosition}
          trianglePosition={trianglePosition}
          popupWidth={dictPopupWidth}
          popupHeight={dictPopupHeight}
          onDismiss={handleDismissPopupAndSelection}
        />
      )}
      {showWikipediaPopup && trianglePosition && dictPopupPosition && (
        <WikipediaPopup
          text={selection?.text as string}
          lang={bookData.bookDoc?.metadata.language as string}
          position={dictPopupPosition}
          trianglePosition={trianglePosition}
          popupWidth={dictPopupWidth}
          popupHeight={dictPopupHeight}
          onDismiss={handleDismissPopupAndSelection}
        />
      )}
      {showDeepLPopup && trianglePosition && translatorPopupPosition && (
        <TranslatorPopup
          text={selection?.text as string}
          position={translatorPopupPosition}
          trianglePosition={trianglePosition}
          popupWidth={transPopupWidth}
          popupHeight={transPopupHeight}
          onDismiss={handleDismissPopupAndSelection}
        />
      )}
      {showAnnotPopup && trianglePosition && annotPopupPosition && (
        <AnnotationPopup
          bookKey={bookKey}
          dir={viewSettings.rtl ? 'rtl' : 'ltr'}
          isVertical={viewSettings.vertical}
          buttons={toolButtons}
          notes={annotationNotes}
          position={annotPopupPosition}
          trianglePosition={trianglePosition}
          highlightOptionsVisible={highlightOptionsVisible}
          selectedStyle={selectedStyle}
          selectedColor={selectedColor}
          popupWidth={annotPopupWidth}
          popupHeight={annotPopupHeight}
          onHighlight={handleHighlight}
          onDismiss={handleDismissPopupAndSelection}
        />
      )}
      {showProofreadPopup && trianglePosition && proofreadPopupPosition && selection && (
        <ProofreadPopup
          bookKey={bookKey}
          selection={selection}
          position={proofreadPopupPosition}
          trianglePosition={trianglePosition}
          popupWidth={proofreadPopupWidth}
          popupHeight={proofreadPopupHeight}
          onDismiss={handleDismissPopupAndSelection}
        />
      )}
      {editingAnnotation && editingAnnotation.color && selection && (
        <AnnotationRangeEditor
          bookKey={bookKey}
          isVertical={viewSettings.vertical}
          annotation={editingAnnotation}
          selection={selection}
          handleColor={selectedColor}
          getAnnotationText={getAnnotationText}
          setSelection={setSelection}
          onStartEdit={handleStartEditAnnotation}
        />
      )}
      {showExportDialog && exportData && bookData.book && (
        <ExportMarkdownDialog
          bookKey={bookKey}
          isOpen={showExportDialog}
          bookTitle={bookData.book.title}
          bookAuthor={bookData.book.author || ''}
          booknotes={exportData.booknotes}
          booknoteGroups={exportData.booknoteGroups}
          onCancel={handleCancelExport}
          onExport={handleConfirmExport}
        />
      )}
    </div>
  );
};

export default Annotator;
