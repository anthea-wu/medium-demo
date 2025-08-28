const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const port = 8080;

const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.wav': 'audio/wav',
    '.mp4': 'video/mp4',
    '.woff': 'application/font-woff',
    '.ttf': 'application/font-ttf',
    '.eot': 'application/vnd.ms-fontobject',
    '.otf': 'application/font-otf',
    '.wasm': 'application/wasm'
};

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url);
    let pathname = `.${parsedUrl.pathname}`;
    
    // 如果路徑是根目錄，顯示 index.html
    if (pathname === './') {
        pathname = './index.html';
    }
    
    const ext = path.parse(pathname).ext;
    
    fs.readFile(pathname, (err, data) => {
        if (err) {
            res.statusCode = 404;
            res.end(`File ${pathname} not found!`);
            return;
        }
        
        res.setHeader('Content-type', mimeTypes[ext] || 'text/plain');
        res.end(data);
    });
});

server.listen(port, () => {
    console.log(`伺服器運行在 http://localhost:${port}/`);
});