'use client';

import React, { useState } from 'react';
import { MdSync, MdCheckCircle, MdWarning, MdError } from 'react-icons/md';
import { Book } from '@/types/book';

interface ReconcileResult {
    hash: string;
    status: 'matched' | 'moved' | 'missing' | 'duplicated';
    oldRelativePath?: string;
    newRelativePath?: string;
    absolutePath?: string;
    suggestedGroupName?: string;
    message?: string;
}

interface ReconcileModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: (results: ReconcileResult[]) => void;
    reconcileBookPaths: (books: Book[]) => Promise<any>;
    applyReconciliation: (books: Book[], results: ReconcileResult[]) => Promise<Book[]>;
    books: Book[];
}

const ReconcileModal: React.FC<ReconcileModalProps> = ({
    isOpen,
    onClose,
    onConfirm,
    reconcileBookPaths,
    applyReconciliation,
    books,
}) => {
    const [isScanning, setIsScanning] = useState(false);
    const [scanComplete, setScanComplete] = useState(false);
    const [reconcileData, setReconcileData] = useState<any>(null);
    const [selectedResults, setSelectedResults] = useState<Set<string>>(new Set());

    if (!isOpen) return null;

    const handleScan = async () => {
        setIsScanning(true);
        setScanComplete(false);
        try {
            const result = await reconcileBookPaths(books);
            setReconcileData(result);
            setScanComplete(true);

            // 默认选中所有需要调整的书籍
            if (result.results) {
                const movedBooks = result.results
                    .filter((r: ReconcileResult) => r.status === 'moved')
                    .map((r: ReconcileResult) => r.hash);
                setSelectedResults(new Set(movedBooks));
            }
        } catch (error) {
            console.error('路径校准失败:', error);
            alert('路径校准失败，请查看控制台日志');
        } finally {
            setIsScanning(false);
        }
    };

    const handleApply = async () => {
        if (!reconcileData || !reconcileData.results) return;

        const selectedItems = reconcileData.results.filter((r: ReconcileResult) =>
            selectedResults.has(r.hash)
        );

        try {
            await applyReconciliation(books, selectedItems);
            onConfirm(selectedItems);
            onClose();
        } catch (error) {
            console.error('应用校准结果失败:', error);
            alert('应用校准结果失败，请查看控制台日志');
        }
    };

    const toggleSelection = (hash: string) => {
        const newSelection = new Set(selectedResults);
        if (newSelection.has(hash)) {
            newSelection.delete(hash);
        } else {
            newSelection.add(hash);
        }
        setSelectedResults(newSelection);
    };

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'matched':
                return <MdCheckCircle className='text-success' size={20} />;
            case 'moved':
                return <MdWarning className='text-warning' size={20} />;
            case 'missing':
                return <MdError className='text-error' size={20} />;
            default:
                return null;
        }
    };

    const getStatusText = (status: string) => {
        switch (status) {
            case 'matched':
                return '路径匹配';
            case 'moved':
                return '文件已移动';
            case 'missing':
                return '文件丢失';
            default:
                return status;
        }
    };

    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
            <div className='bg-base-100 rounded-2xl shadow-xl w-full max-w-4xl max-h-[80vh] overflow-hidden flex flex-col'>
                {/* Header */}
                <div className='px-6 py-4 border-b border-base-300'>
                    <h2 className='text-xl font-bold flex items-center gap-2'>
                        <MdSync size={24} />
                        书籍路径校准
                    </h2>
                    <p className='text-sm text-base-content/70 mt-2'>
                        扫描文件系统，检测书籍文件位置变化并同步到书库
                    </p>
                </div>

                {/* Content */}
                <div className='flex-1 overflow-y-auto px-6 py-4'>
                    {!scanComplete ? (
                        <div className='text-center py-12'>
                            <button
                                onClick={handleScan}
                                disabled={isScanning}
                                className='btn btn-primary btn-lg'
                            >
                                {isScanning ? (
                                    <>
                                        <span className='loading loading-spinner'></span>
                                        扫描中...
                                    </>
                                ) : (
                                    <>
                                        <MdSync size={20} />
                                        开始扫描
                                    </>
                                )}
                            </button>
                            <p className='text-sm text-base-content/60 mt-4'>
                                点击开始扫描文件系统，查找路径不一致的书籍
                            </p>
                        </div>
                    ) : (
                        <div>
                            {/* Summary */}
                            {reconcileData?.summary && (
                                <div className='stats stats-horizontal shadow w-full mb-6'>
                                    <div className='stat'>
                                        <div className='stat-title'>总计</div>
                                        <div className='stat-value text-2xl'>{reconcileData.summary.total}</div>
                                    </div>
                                    <div className='stat'>
                                        <div className='stat-title'>匹配</div>
                                        <div className='stat-value text-2xl text-success'>
                                            {reconcileData.summary.matched}
                                        </div>
                                    </div>
                                    <div className='stat'>
                                        <div className='stat-title'>已移动</div>
                                        <div className='stat-value text-2xl text-warning'>
                                            {reconcileData.summary.moved}
                                        </div>
                                    </div>
                                    <div className='stat'>
                                        <div className='stat-title'>丢失</div>
                                        <div className='stat-value text-2xl text-error'>
                                            {reconcileData.summary.missing}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Results List */}
                            {reconcileData?.results && reconcileData.results.length > 0 && (
                                <div className='space-y-2'>
                                    <h3 className='font-semibold mb-2'>详细结果</h3>
                                    {reconcileData.results
                                        .filter((r: ReconcileResult) => r.status !== 'matched')
                                        .map((result: ReconcileResult) => (
                                            <div
                                                key={result.hash}
                                                className='card bg-base-200 shadow-sm hover:shadow-md transition-shadow'
                                            >
                                                <div className='card-body p-4'>
                                                    <div className='flex items-start gap-3'>
                                                        {result.status === 'moved' && (
                                                            <input
                                                                type='checkbox'
                                                                className='checkbox checkbox-primary mt-1'
                                                                checked={selectedResults.has(result.hash)}
                                                                onChange={() => toggleSelection(result.hash)}
                                                            />
                                                        )}
                                                        <div className='flex-1'>
                                                            <div className='flex items-center gap-2 mb-2'>
                                                                {getStatusIcon(result.status)}
                                                                <span className='font-semibold'>{getStatusText(result.status)}</span>
                                                            </div>
                                                            {result.oldRelativePath && (
                                                                <div className='text-sm'>
                                                                    <span className='text-base-content/60'>原路径: </span>
                                                                    <span className='font-mono'>{result.oldRelativePath}</span>
                                                                </div>
                                                            )}
                                                            {result.newRelativePath && result.status === 'moved' && (
                                                                <div className='text-sm'>
                                                                    <span className='text-base-content/60'>新路径: </span>
                                                                    <span className='font-mono text-success'>
                                                                        {result.newRelativePath}
                                                                    </span>
                                                                </div>
                                                            )}
                                                            {result.suggestedGroupName !== undefined && (
                                                                <div className='text-sm'>
                                                                    <span className='text-base-content/60'>建议分组: </span>
                                                                    <span className='badge badge-primary badge-sm'>
                                                                        {result.suggestedGroupName || '未分组'}
                                                                    </span>
                                                                </div>
                                                            )}
                                                            {result.message && (
                                                                <div className='text-xs text-base-content/50 mt-1'>
                                                                    {result.message}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            )}

                            {reconcileData?.unmatchedFiles && reconcileData.unmatchedFiles.length > 0 && (
                                <div className='mt-6'>
                                    <h3 className='font-semibold mb-2'>未匹配的文件</h3>
                                    <p className='text-sm text-base-content/60 mb-2'>
                                        这些文件存在于文件系统中，但不在书库记录中
                                    </p>
                                    <div className='space-y-1 max-h-40 overflow-y-auto'>
                                        {reconcileData.unmatchedFiles.map((file: string) => (
                                            <div key={file} className='text-sm font-mono bg-base-300 px-3 py-2 rounded'>
                                                {file}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className='px-6 py-4 border-t border-base-300 flex justify-end gap-3'>
                    <button onClick={onClose} className='btn btn-ghost'>
                        取消
                    </button>
                    {scanComplete && reconcileData?.summary?.moved > 0 && (
                        <>
                            <button onClick={handleScan} className='btn btn-ghost'>
                                重新扫描
                            </button>
                            <button
                                onClick={handleApply}
                                className='btn btn-primary'
                                disabled={selectedResults.size === 0}
                            >
                                应用选中的调整 ({selectedResults.size})
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ReconcileModal;
