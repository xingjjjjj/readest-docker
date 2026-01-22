const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

async function testImport() {
  // First verify file is there
  const fs = require('fs');
  const files = fs.readdirSync('/app/readest/books/');
  console.log('[TEST] Current files in /app/readest/books/:', files);
  
  // Call the scan API to see what's found
  console.log('\n[TEST] Calling /api/storage/scan...');
  const scanRes = await fetch('http://localhost:3001/api/storage/scan', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  });
  const scanData = await scanRes.json();
  console.log('[TEST] Scan result:', JSON.stringify(scanData, null, 2));
  
  // Now import
  if (scanData.books && scanData.books.length > 0) {
    const book = scanData.books[0];
    console.log('\n[TEST] Calling /api/storage/import with:', {
      relativePath: book.relativePath,
      hash: book.hash
    });
    
    const importRes = await fetch('http://localhost:3001/api/storage/import', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        relativePath: book.relativePath,
        hash: book.hash,
        createLinks: true
      })
    });
    const importData = await importRes.json();
    console.log('[TEST] Import result:', JSON.stringify(importData, null, 2));
  }
  
  // Check final state
  console.log('\n[TEST] Final files in /app/readest/books/:');
  const finalFiles = fs.readdirSync('/app/readest/books/');
  console.log(finalFiles);
}

testImport().catch(console.error);
