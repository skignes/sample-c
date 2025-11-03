const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8080;
const ROOT = process.cwd();

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
};

function send404(res) {
  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.end('404 Not Found');
}

function send500(res) {
  res.statusCode = 500;
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.end('500 Internal Server Error');
}

const server = http.createServer((req, res) => {
  try {
    // Decode URL and prevent directory traversal
    const url = decodeURIComponent(new URL(req.url, `http://localhost`).pathname);
    let safePath = url.split('?')[0];
    if (safePath.endsWith('/')) safePath += 'index.html';

    const filePath = path.join(ROOT, safePath);
    if (!filePath.startsWith(ROOT)) {
      res.statusCode = 403;
      return res.end('Forbidden');
    }

    fs.stat(filePath, (err, stats) => {
      if (err || !stats.isFile()) return send404(res);

      const ext = path.extname(filePath).toLowerCase();
      const type = MIME[ext] || 'application/octet-stream';
      res.setHeader('Content-Type', type);

      const stream = fs.createReadStream(filePath);
      stream.on('error', () => send500(res));
      stream.pipe(res);
    });
  } catch (e) {
    send500(res);
  }
});

server.listen(PORT, () => {
  console.log(`Static server listening on http://localhost:${PORT}`);
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('Shutting down server');
  server.close(() => process.exit(0));
});
