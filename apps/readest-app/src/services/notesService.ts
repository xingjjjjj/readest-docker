import { EnvConfigType } from '@/services/environment';
import { getNotesFilename } from '@/utils/book';
import { BookNote } from '@/types/book';

export interface NotesFile {
    version: number;
    updatedAt: number;
    books: {
        [bookHash: string]: {
            title?: string;
            metaHash?: string;
            notes: BookNote[];
        };
    };
}

const DEFAULT_NOTES_FILE: NotesFile = {
    version: 1,
    updatedAt: 0,
    books: {},
};

export const loadAllNotes = async (envConfig: EnvConfigType): Promise<NotesFile> => {
    const appService = await envConfig.getAppService();
    const fn = getNotesFilename();
    try {
        if (!(await appService.fs.exists(fn, 'Books'))) return DEFAULT_NOTES_FILE;
        const str = (await appService.fs.readFile(fn, 'Books', 'text')) as string;
        const parsed = JSON.parse(str) as NotesFile;
        return parsed;
    } catch (e) {
        console.warn('[notesService] failed to load notes file:', e);
        return DEFAULT_NOTES_FILE;
    }
};

export const saveAllNotes = async (envConfig: EnvConfigType, notesFile: NotesFile) => {
    const appService = await envConfig.getAppService();
    const fn = getNotesFilename();
    // atomic write: write tmp then write final file (rename may not be available in all platforms)
    const tmp = `${fn}.tmp`;
    try {
        const payload = JSON.stringify({ ...notesFile, updatedAt: Date.now() }, null, 2);
        await appService.fs.writeFile(tmp, 'Books', payload);
        // Some platform fs implementations (web) don't provide rename; write final file and cleanup tmp
        try {
            await appService.fs.writeFile(fn, 'Books', payload);
        } catch (e) {
            console.warn('[notesService] failed to write final notes file directly, will try fallback write', e);
            // fallback: attempt direct write of raw notesFile
            await appService.fs.writeFile(fn, 'Books', JSON.stringify(notesFile));
        }
        // try to remove tmp file if supported
        try {
            await appService.fs.removeFile(tmp, 'Books');
        } catch (e) {
            // ignore cleanup error
        }
    } catch (e) {
        console.error('[notesService] failed to save notes file:', e);
        try {
            // fallback: write directly
            await appService.fs.writeFile(fn, 'Books', JSON.stringify(notesFile));
        } catch (err) {
            console.error('[notesService] fallback write also failed:', err);
            throw err;
        }
    }
};

export const getNotesForBook = async (envConfig: EnvConfigType, bookHash: string) => {
    const file = await loadAllNotes(envConfig);
    return file.books?.[bookHash]?.notes || [];
};

export const saveNotesForBook = async (
    envConfig: EnvConfigType,
    bookHash: string,
    notes: BookNote[],
    title?: string,
    metaHash?: string,
) => {
    const file = await loadAllNotes(envConfig);
    file.books = file.books || {};
    file.books[bookHash] = {
        title: title || file.books[bookHash]?.title,
        metaHash: metaHash || file.books[bookHash]?.metaHash,
        notes,
    };
    file.updatedAt = Date.now();
    await saveAllNotes(envConfig, file);
};

export const addOrUpdateNoteForBook = async (
    envConfig: EnvConfigType,
    bookHash: string,
    note: BookNote,
    title?: string,
    metaHash?: string,
) => {
    const file = await loadAllNotes(envConfig);
    file.books = file.books || {};
    const entry = file.books[bookHash] || { title, metaHash, notes: [] };
    const ix = entry.notes.findIndex((n) => n.id === note.id);
    if (ix === -1) entry.notes.push(note);
    else entry.notes[ix] = note;
    file.books[bookHash] = { ...entry, title: title || entry.title, metaHash: metaHash || entry.metaHash };
    file.updatedAt = Date.now();
    await saveAllNotes(envConfig, file);
};

export const deleteNoteForBook = async (envConfig: EnvConfigType, bookHash: string, noteId: string) => {
    const file = await loadAllNotes(envConfig);
    if (!file.books || !file.books[bookHash]) return;
    const entry = file.books[bookHash];
    const ix = entry.notes.findIndex((n) => n.id === noteId);
    if (ix === -1) return;
    entry.notes.splice(ix, 1);
    file.books[bookHash] = entry;
    file.updatedAt = Date.now();
    await saveAllNotes(envConfig, file);
};
