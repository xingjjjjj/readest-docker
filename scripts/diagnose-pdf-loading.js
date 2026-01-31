/**
 * PDF 加载诊断脚本
 * 
 * 使用方法：
 * 1. 在浏览器控制台打开 readest 应用
 * 2. 粘贴此脚本并运行
 * 3. 打开一个 PDF 文件
 * 4. 查看控制台输出的诊断信息
 */

(function() {
  console.log('=== PDF Loading Diagnostics Tool ===');
  console.log('Monitoring network requests for PDF loading...');
  
  const originalFetch = window.fetch;
  const requests = [];
  
  // 拦截 fetch 请求
  window.fetch = function(...args) {
    const url = args[0];
    const options = args[1] || {};
    
    // 记录请求
    const request = {
      url: typeof url === 'string' ? url : url.url,
      timestamp: Date.now(),
      headers: options.headers || {},
      method: options.method || 'GET',
    };
    
    // 检查是否是文件加载请求
    if (request.url.includes('/api/storage/file')) {
      console.group('📦 File Request');
      console.log('URL:', request.url);
      console.log('Method:', request.method);
      
      // 检查 Range 头
      const rangeHeader = options.headers?.['Range'] || options.headers?.['range'];
      if (rangeHeader) {
        console.log('✅ Range Request:', rangeHeader);
        const match = rangeHeader.match(/bytes=(\d+)-(\d+)/);
        if (match) {
          const start = parseInt(match[1]);
          const end = parseInt(match[2]);
          const size = end - start + 1;
          const sizeMB = (size / 1024 / 1024).toFixed(2);
          console.log(`   Size: ${sizeMB} MB (${start} - ${end})`);
        }
      } else {
        console.warn('⚠️ Full file request (no Range header)');
      }
      
      console.groupEnd();
      
      request.isRangeRequest = !!rangeHeader;
      request.rangeHeader = rangeHeader;
      requests.push(request);
    }
    
    // 调用原始 fetch
    const promise = originalFetch.apply(this, args);
    
    // 监控响应
    return promise.then(response => {
      if (request.url.includes('/api/storage/file')) {
        const contentLength = response.headers.get('Content-Length');
        const contentRange = response.headers.get('Content-Range');
        const status = response.status;
        
        console.group('📥 Response');
        console.log('Status:', status);
        if (contentLength) {
          const sizeMB = (parseInt(contentLength) / 1024 / 1024).toFixed(2);
          console.log('Content-Length:', sizeMB, 'MB');
        }
        if (contentRange) {
          console.log('✅ Partial Content:', contentRange);
        } else if (status === 200 && contentLength) {
          console.warn('⚠️ Full file response (200, not 206)');
        }
        console.groupEnd();
        
        request.responseStatus = status;
        request.contentLength = contentLength;
        request.contentRange = contentRange;
        request.duration = Date.now() - request.timestamp;
      }
      
      return response;
    });
  };
  
  // 生成报告
  window.generateLoadingReport = function() {
    console.group('=== PDF Loading Report ===');
    
    const totalRequests = requests.length;
    const rangeRequests = requests.filter(r => r.isRangeRequest).length;
    const fullRequests = totalRequests - rangeRequests;
    
    console.log('Total requests:', totalRequests);
    console.log('Range requests:', rangeRequests);
    console.log('Full file requests:', fullRequests);
    
    if (fullRequests > 0) {
      console.warn('⚠️ Found full file downloads!');
      console.log('Full file requests:');
      requests
        .filter(r => !r.isRangeRequest)
        .forEach((r, i) => {
          console.log(`  ${i + 1}. ${r.url}`);
          if (r.contentLength) {
            const sizeMB = (parseInt(r.contentLength) / 1024 / 1024).toFixed(2);
            console.log(`     Size: ${sizeMB} MB`);
            console.log(`     Duration: ${r.duration} ms`);
          }
        });
    } else {
      console.log('✅ All requests are using Range!');
    }
    
    if (rangeRequests > 0) {
      const totalBytes = requests
        .filter(r => r.contentLength)
        .reduce((sum, r) => sum + parseInt(r.contentLength), 0);
      const totalMB = (totalBytes / 1024 / 1024).toFixed(2);
      console.log(`Total data loaded: ${totalMB} MB`);
    }
    
    console.groupEnd();
    
    return {
      totalRequests,
      rangeRequests,
      fullRequests,
      requests: requests.map(r => ({
        url: r.url,
        isRange: r.isRangeRequest,
        status: r.responseStatus,
        size: r.contentLength,
        duration: r.duration,
      })),
    };
  };
  
  console.log('✅ Diagnostics tool installed');
  console.log('📌 Open a PDF file to start monitoring');
  console.log('📌 Run generateLoadingReport() to see the report');
  
  // 10秒后自动生成报告
  setTimeout(() => {
    if (requests.length > 0) {
      console.log('\n=== Auto-generated report after 10s ===');
      generateLoadingReport();
    }
  }, 10000);
})();
