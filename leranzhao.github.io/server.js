const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8000;
const MIME = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.json': 'application/json',
  '.woff2': 'font/woff2',
};

http.createServer((req, res) => {
  let filePath = '.' + (req.url === '/' ? '/_preview.html' : req.url);
  const ext = path.extname(filePath);
  const contentType = MIME[ext] || 'text/html';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404);
      res.end('Not found');
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    }
  });
}).listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
