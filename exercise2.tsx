fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((json) => console.log(json));



/*Utilizando curl:*/ 
/*A1: 
a) METODO GET:

TLS: TLSv1.3
Protocolo HTTP: HTTP/2
Status: 200
Headers:
content-type: application/json; charset=utf-8: la respuesta es JSON codificado en UTF-8.
content-length: 292: tamaño de la respuesta en bytes.
cache-control: max-age=43200: puede almacenarse en caché durante 12 horas.*/

/*A2: GET con query params

Resultados: 5
Filtro: se agregó ?postId=1 a la URL /comments.*/

/*A3: metodo POST

Status: 201
ID asignado: 101
La API devuelve un ID simulado, pero no persiste realmente el recurso. Por eso el nuevo post no queda guardado.
*/

/*A4: metodo PATCH o PUT

Status: 200
PATCH modifica un recurso.
PUT reemplaza el recurso completo.
El body reflejó el cambio de title y conservó los demás campos.*/

/*A5: metodo DELETE

Status: 200
Body: {}*/

/*A6: recurso inexistente

Status: 404
Body: {}*/

/*Utilizando postman:*/

/*B) postman*/

/*B1: Si, se ven los mismos datos que antes, en la parte de abajo de la interfaz de postman.*/
/*B2: En postman todo esta seccionado para que encuentres más rapido, pero la terminal te daba el status arriba de todo sin necesidad de buscar.*/