CREATE TABLE generos (
    id_genero SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE peliculas (
    id_pelicula SERIAL PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    anio_estreno INT NOT NULL,
    director VARCHAR(100),
    id_genero INT REFERENCES generos(id_genero) ON DELETE SET NULL
);

INSERT INTO generos (nombre) VALUES 
('Ciencia Ficción'),
('Drama'),
('Acción'),
('Comedia'),
('Terror');

INSERT INTO peliculas (titulo, anio_estreno, director, id_genero) VALUES 
('Inception', 2010, 'Christopher Nolan', 1),
('The Shawshank Redemption', 1994, 'Frank Darabont', 2),
('The Dark Knight', 2008, 'Christopher Nolan', 3),
('Pulp Fiction', 1994, 'Quentin Tarantino', 3),
('Parasite', 2019, 'Bong Joon Ho', 2);
