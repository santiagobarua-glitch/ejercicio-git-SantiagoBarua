/*reto 1
curl httpbin.org/headers -H "Alumno: Santiago"

{
  "headers": {
    "Accept": "* / *", 
    "Alumno": "Santiago", 
    "Host": "httpbin.org", 
    "User-Agent": "curl/8.7.1", 
    "X-Amzn-Trace-Id": "Root=1-6aa4187a-4811b6a50580917273c1d280"
  }
}         */

/*reto 2

curl httpbin.org/post -H "Alumno: Santiago" -d "titulo=alumnos"

{
  "args": {}, 
  "data": "", 
  "files": {}, 
  "form": {
    "titulo": "alumnos"
  }, 
  "headers": {
    "Accept": "* / *", 
    "Alumno": "Santiago", 
    "Content-Length": "14", 
    "Content-Type": "application/x-www-form-urlencoded", 
    "Host": "httpbin.org", 
    "User-Agent": "curl/8.7.1", 
    "X-Amzn-Trace-Id": "Root=1-6aa419da-2e36335e7be23eb605b23c4a"
  }, 
  "json": null, 
  "origin": "190.55.239.132", 
  "url": "http://httpbin.org/post"

  1) aparece dentro del objeto "form" de la respuesta de httpbin.org.
  2) queda en un string vacio:
  curl httpbin.org/post -H "Alumno: Santiago" -d  "alumnos"    

{
  "args": {}, 
  "data": "", 
  "files": {}, 
  "form": {
    "alumnos": ""
  }, 
  "headers": {
    "Accept": "* / *", 
    "Alumno": "Santiago", 
    "Content-Length": "7", 
    "Content-Type": "application/x-www-form-urlencoded", 
    "Host": "httpbin.org", 
    "User-Agent": "curl/8.7.1", 
    "X-Amzn-Trace-Id": "Root=1-6aa41abf-1d097eda010c542973a3cc2c"
  }, 
  "json": null, 
  "origin": "190.192.146.29", 
  "url": "http://httpbin.org/post"
}
}*/

/*reto 3
curl -i httpbin.org//status/500                                     
HTTP/1.1 500 INTERNAL SERVER ERROR
Date: Fri, 11 Sep 2026 15:26:43 GMT
Content-Type: text/html; charset=utf-8
Content-Length: 0
Connection: keep-alive
Server: gunicorn/19.9.0
Access-Control-Allow-Origin: *
Access-Control-Allow-Credentials: true

curl -i httpbin.org//status/404
HTTP/1.1 404 NOT FOUND
Date: Fri, 11 Sep 2026 15:27:00 GMT
Content-Type: text/html; charset=utf-8
Content-Length: 0
Connection: keep-alive
Server: gunicorn/19.9.0
Access-Control-Allow-Origin: *
Access-Control-Allow-Credentials: true

1) utilice la flag -i que me da la data necesaria, como lo es en la primera linea HTTPS/1.1 404 Not Found
*/