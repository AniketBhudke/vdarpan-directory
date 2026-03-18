const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

// Try multiple possible build directory locations
const buildPaths = [
  path.join(__dirname, 'build'),
  path.join(process.cwd(), 'build'),
  '/app/build',
  '/opt/render/project/build'
];

let DIST_DIR = buildPaths.find(p => fs.existsSync(p));

if (!DIST_DIR) {
  console.error('Build folder not found in any expected location:');
  buildPaths.forEach(p => console.error(`  - ${p}`));
  process.exit(1);
}

console.log(`Server starting. Using DIST_DIR: ${DIST_DIR}`);

const server = http.createServer((req, res) => {
  // Remove trailing slash and search params
  let urlPath = req.url.split('?')[0];
  if (urlPath !== '/' && urlPath.endsWith('/')) {
    urlPath = urlPath.slice(0, -1);
  }

  let filePath = urlPath === '/' 
    ? path.join(DIST_DIR, 'index.html')
    : path.join(DIST_DIR, urlPath);

  // Prevent directory traversal attacks
  if (!filePath.startsWith(DIST_DIR)) {
    filePath = path.join(DIST_DIR, 'index.html');
  }

  console.log(`Request: ${req.url} -> ${filePath}`);
  const ext = path.extname(filePath).toLowerCase();
  
  // Set MIME types
  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
  };

  fs.readFile(filePath, (err, data) => {
    if (err) {
      // Serve index.html for SPA routing
      fs.readFile(path.join(DIST_DIR, 'index.html'), (err2, data2) => {
        if (err2) {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('404 Not Found');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(data2);
        }
      });
    } else {
      res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'text/plain' });
      res.end(data);
    }
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
