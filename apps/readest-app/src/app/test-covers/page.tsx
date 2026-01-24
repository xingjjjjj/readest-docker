'use client';

import { useEffect, useState } from 'react';
import { envConfig } from '@/services/environment';

export default function RegenerateCoversPage() {
    const [logs, setLogs] = useState<string[]>([]);
    const [isGenerating, setIsGenerating] = useState(false);
    const [result, setResult] = useState<any>(null);

    const addLog = (message: string) => {
        setLogs((prev) => [...prev, `[${new Date().toLocaleTimeString()}] ${message}`]);
        console.log(message);
    };

    const generateCovers = async () => {
        setIsGenerating(true);
        setLogs([]);
        setResult(null);

        try {
            addLog('开始获取 appService...');
            const appService = await envConfig.getAppService();

            addLog('开始加载图书列表...');
            const books = await appService.loadLibraryBooks();
            addLog(`共加载 ${books.length} 本书`);

            const booksWithoutCovers = [];
            for (const book of books) {
                if (book.deletedAt) continue;
                const coverPath = book.relativePath?.replace(/\.[^.]+$/, '') + '/cover.png';
                if (coverPath) {
                    const exists = await appService.fs.exists(coverPath, 'Books');
                    if (!exists) {
                        booksWithoutCovers.push(book);
                        addLog(`缺失封面: ${book.title}`);
                    }
                }
            }

            addLog(`检测到 ${booksWithoutCovers.length} 本书缺失封面`);

            if (booksWithoutCovers.length === 0) {
                addLog('所有书籍都有封面！');
                setIsGenerating(false);
                return;
            }

            addLog('开始批量生成封面...');
            const res = await appService.regenerateMissingCovers(booksWithoutCovers);
            addLog(`封面生成完成！`);
            setResult(res);
        } catch (error) {
            addLog(`错误: ${error}`);
            console.error(error);
        } finally {
            setIsGenerating(false);
        }
    };

    return (
        <div className='container mx-auto p-8'>
            <h1 className='text-3xl font-bold mb-6'>封面批量生成工具</h1>

            <button
                className='btn btn-primary mb-6'
                onClick={generateCovers}
                disabled={isGenerating}
            >
                {isGenerating ? '生成中...' : '开始生成封面'}
            </button>

            {result && (
                <div className='alert alert-info mb-6'>
                    <div>
                        <p>总计: {result.total}</p>
                        <p>成功: {result.regenerated}</p>
                        <p>失败: {result.failed}</p>
                    </div>
                </div>
            )}

            <div className='bg-base-200 p-4 rounded-lg'>
                <h2 className='text-xl font-semibold mb-4'>日志输出</h2>
                <div className='max-h-96 overflow-y-auto font-mono text-sm'>
                    {logs.map((log, i) => (
                        <div key={i} className='mb-1'>
                            {log}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
