1 ¿Cuál es la diferencia principal entre una base de datos relacional (SQL) y una no relacional (NoSQL)?

Una base de datos no relacional agrupa varias familias distintas, sin una estructura de tablas fija. Mientras que una base de datos relacional organiza los datos en tablas con estructura fija y relaciones explícitas mediante claves.

2 Nombrá al menos dos motores de base de datos relacionales, y dos no relacionales (de categorías distintas: documentos, clave-valor, o columnar).

relacionales tenemos: MySQL y PostgreSQL
y no relacionales tenemos: MongoDB y Redis

3 Tomemos el ejemplo de biblioteca (authors, books, loans) que ya usaste en el MATERIAL. En una base relacional, esos datos viven en 3 tablas separadas, conectadas por claves foráneas. Si tuvieras que modelar ese mismo ejemplo como base de datos de documentos (tipo MongoDB), una opción posible sería tener un solo documento por libro, con los datos del autor "adentro" del documento (en vez de en otra tabla aparte). Con esa idea como referencia: elegí 2 o 3 entidades de tu propio proyecto (por ejemplo, personajes y su casa/facción) y describí brevemente cómo se verían como documentos, en vez de como tablas separadas.

{
  "_id": "64f1b2c3e4b0a1a2c3d4e999",
  "titulo": "Interestelar",
  "duracion_en_minutos": 169,
  "generos": ["Ciencia Ficción", "Drama", "Aventura"],
  
  "director": {
    "nombre": "Christopher Nolan",
    "fecha_nacimiento": "1970-07-30",
    "nacionalidad": "Británica"
  },
  
  "estadisticas_usuarios": {
    "total_vistas": 1240500,
    "puntuacion_promedio": 4.8,
    "guardada_en_favoritos": 85200
  }
}


4 ¿En qué situación elegirías una base no relacional en vez de una relacional? Dame un ejemplo concreto (no tiene que ser de tu proyecto).

Elegiría una base de datos no relacional (NoSQL) en lugar de una relacional cuando la prioridad absoluta del sistema sea la alta escalabilidad horizontal, la velocidad extrema de lectura/escritura o la flexibilidad ante datos con estructuras cambiantes. Un ejemplo podria ser un sistema de publicaciones e interacciones de una red social global como Instagram o X.