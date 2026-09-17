bloque 2:
2) SELECT *
FROM peliculas
WHERE anio_estreno > 1995
ORDER BY anio_estreno DESC;

"id_pelicula"	"titulo"	"anio_estreno"	"director"	"id_genero"
       5	    "Parasite"	     2019	 "Bong Joon Ho"	     2  
        1	    "Inception"	     2010	"Christopher Nolan"  1     
        3	"The Dark Knight"	2008	"Christopher Nolan"	 3

3) UPDATE generos
SET nombre = 'Ciencia ficción'
WHERE id_genero = 1
RETURNING *;

"id_genero"	"nombre"
    1	"Ciencia ficción"

4) Insert:
INSERT INTO peliculas (titulo, anio_estreno, director, id_genero)
VALUES ('Película de prueba', 2026, 'Director de prueba', 4)
RETURNING *;

"id_pelicula"	"titulo"	"anio_estreno"	"director"	"id_genero"
      6	  "Película de prueba"	2026	"Director de prueba"  4 

Delete: 
DELETE FROM peliculas
WHERE titulo = 'Película de prueba'
  AND director = 'Director de prueba'
RETURNING *;
SELECT *
FROM peliculas
WHERE titulo = 'Película de prueba';

y devuelve vacio.

error de clave foranea: 
DELETE FROM generos
WHERE id_genero = 3
RETURNING *;

"id_genero"	"nombre"
     3	    "Acción"