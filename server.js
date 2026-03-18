const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, 'build');

console.log(`=== Server Starting ===`);
console.log(`PORT: ${PORT}`);
console.log(`DIST_DIR: ${DIST_DIR}`);
console.log(`DIST_DIR exists: ${fs.existsSync(DIST_DIR)}`);

if (!fs.existsSync(DIST_DIR)) {
  console.error(`ERROR: Build directory not found at ${DIST_DIR}`);
  console.error(`Current directory: ${process.cwd()}`);
  console.error(`__dirname: ${__dirname}`);
  console.error(`Contents of current directory:`);
  fs.readdirSync('.').forEach(f => console.error(`  - ${f}`));
  process.exit(1);
}

const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject'
};

const server = http.createServer((req, res) => {
  // Clean the request URL
  const urlPath = req.url.split('?')[0];
  const isStatic = /\.[a-z0-9]+$/i.test(urlPath);
  
  let filePath = path.join(DIST_DIR, urlPath === '/' ? 'index.html' : urlPath);
  
  // Prevent directory traversal
  if (!filePath.startsWith(DIST_DIR)) {
    filePath = path.join(DIST_DIR, 'index.html');
  }

  // Try to serve the requested file
  fs.readFile(filePath, (err, data) => {
    if (!err) {
      const ext = path.extname(filePath).toLowerCase();
      const contentType = MIME_TYPES[ext] || 'text/plain';
      console.log(`✓ ${urlPath} (${ext})`);
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    } else if (isStatic) {
      // Static files that don't exist should return 404
      console.log(`✗ ${urlPath} (404 - not found)`);
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
    } else {
      // For non-static routes, serve index.html (SPA routing)
      fs.readFile(path.join(DIST_DIR, 'index.html'), (err2, data2) => {
        if (err2) {
          console.log(`✗ ${urlPath} (index.html not found)`);
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Internal Server Error: index.html not found');
        } else {
          console.log(`✓ ${urlPath} -> index.html (SPA routing)`);
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(data2);
        }
      });
    }
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`\n✓ Server listening on http://0.0.0.0:${PORT}\n`);
});
