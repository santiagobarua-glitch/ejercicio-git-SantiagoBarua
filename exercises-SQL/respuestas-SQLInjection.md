bloque 1:
1) Un SQL Injection (SQLi) es una vulnerabilidad de seguridad que ocurre cuando un atacante logra "inyectar" código SQL malicioso dentro de una consulta de la base de datos. Esto pasa porque la aplicación confía ciegamente en lo que ingresa el usuario y lo mezcla directamente con las instrucciones del sistema, permitiendo al atacante manipular, borrar o robar información confidencial.
Un ejemplo seria un formulario de login armado:
SELECT * FROM usuarios WHERE email = 'INPUT_DEL_USUARIO';
donde el usuario ingresa admin@correo.com' OR '1'='1
lo que se termina ejecutando es: SELECT * FROM usuarios WHERE email = 'admin@correo.com' OR '1'='1';
por la comilla simple se cierra prematuramente el string esperado. El operador OR '1'='1' añade una condición que siempre es verdadera. Como resultado, la base de datos devuelve el primer registro que encuentra (usualmente el administrador), salteándose por completo la verificación de la contraseña.

2) A nivel interno en el motor de la base de datos, la diferencia concreta entre concatenar y usar placeholders ($1, $2) radica en el momento en que se define la estructura lógica de la consulta y cómo se procesan los datos.

3) En el código actual, la ruta `GET /alumnos` solamente devuelve texto fijo y no recibe datos del usuario. Como ejemplo hipotético, si recibiera un nombre mediante `?nombre=` y armara la consulta concatenando directamente el valor:

const query = `SELECT * FROM alumnos WHERE nombre = '${nombre}'`;
Alguien podría enviar como nombre:

Manquez' OR '1'='1' --
La consulta quedaría aproximadamente así:

SELECT * FROM alumnos
WHERE nombre = 'Manquez' OR '1'='1' --';
La comilla simple cierra el valor original, `OR '1'='1'` agrega una condición siempre verdadera y `--` comenta el resto de la consulta. Para evitarlo, se deben usar consultas parametrizadas, por ejemplo con placeholders como `$1`, en lugar de concatenar directamente el dato recibido.