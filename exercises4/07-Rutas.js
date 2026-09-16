const http = require('http');

const PUERTO = 4000;
const servidor = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');

  if (req.url === '/' && req.method === 'GET') {
    res.statusCode = 200;
    res.end('<h1>página de inicio</h1>');
  } 
  else if (req.url === '/alumnos' && req.method === 'GET') {
    res.statusCode = 200;
    res.end('<h1>Los alumos desaprobados son:</h1><p>Manquez, La Volpe y Sosa</p>');
  } 
  else {
    res.statusCode = 404;
    res.end('<h1>Error 404</h1>');
  }
});

servidor.listen(PUERTO, () => {
  console.log(`Servidor ejecutándose con éxito en http://localhost:${PUERTO}`);
})