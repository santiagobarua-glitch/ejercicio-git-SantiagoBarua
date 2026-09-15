1 ¿Qué problema concreto tiene una tabla única que repite datos de un mismo autor en cada fila de libro (en vez de separar autores y libros en dos tablas)?

Un problema seria un error de tipeo o que el autor cambie de nombre, haciendo asi que tengas que ir cambiando en la lista uno por uno, en vez de hacer el cambio una vez y que se guarde.

2 ¿Qué es la normalización, con tus propias palabras?

La normalizacion es separar los datos que se nos dan y almacenarlos en diferentes secciones de la lista por cuantas veces se repiten, y crear una organizacion mejor.

3 La normalización tiene niveles formales llamados 1FN, 2FN y 3FN, cada uno más estricto que el anterior. Investigá qué es la 1FN (Primera Forma Normal). Explicá con tus propias palabras qué regla exige.

la 1FN, exige que cada celda contenga un único valor atómico e indivisible. Es decir que cada atributo debe tener un solo valor por cada fila, sin listas, conjuntos o datos compuestos. No deben existir columnas duplicadas que guarden información del mismo tipo. Todos los datos almacenados en una misma columna deben pertenecer a la misma categoría o tipo. Cada fila debe identificarse de manera única mediante una clave primaria.

4 Entidad es el nombre que le damos a cada "cosa" distinta que modelamos como su propia tabla (por ejemplo, en el ejemplo de biblioteca, "autor" es una entidad y "libro" es otra entidad). Pensá en el dominio de tu propio proyecto de React: nombrá 2 entidades distintas que tenga tu dominio, y para cada una, un dato que le pertenece SOLO a esa entidad (por ejemplo: la nacionalidad le pertenece al autor, no al libro).

Entidad Pelicula: Duracion
Entidad Usuario: Preferencias_de_pelicula
