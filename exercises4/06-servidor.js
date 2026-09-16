const http = require('http');

const PORT = 3000;
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');

  if (req.url === '/' && req.method === 'GET') {
    res.statusCode = 200;
    res.end('<h1>página de inicio</h1>');
  } 
  else {
    res.statusCode = 404;
    res.end('<h1>Error 404</h1>');
  }
});

servidor.listen(PORT, () => {
  console.log(`Servidor ejecutándose con éxito en http://localhost:${PORT}`);
});
