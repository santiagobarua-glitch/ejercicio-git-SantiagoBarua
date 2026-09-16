node version: v26.3.1

bloque 1:
ejercicio1:
1) Es un entorno de ejecucion para JS.
2) En node es más facil identificar el error, aparte esta orientado al programador a diferencia que el navegador.
3) window y document son parte del DOM, node no incluye estas herramientas. En vez de window, node utiliza un objeto global llamado Global.

bloque 4:
ejercicio6:
1) Un servidor HTTP es un programa que espera peticiones de cliente y les envía una respuesta utilizando el protocolo HTTP. El módulo http de Node.js es una herramienta nativa que te da las funciones necesarias para transferir datos a través de la red. Te permite tanto crear un servidor que reciba conexiones como realizar peticiones a otros servidores externos.
2) req: Contiene toda la información que viene del cliente.
res: Es el objeto que usas para responder al cliente.
3) Un puerto es un número que funciona como una "puerta de entrada" específica en tu computadora. Que un servidor escuche en el puerto 3000 significa que el programa de Node.js se queda atento exclusivamente a los datos que entran por esa "puerta". 
4) localhost es un nombre de dominio reservado que significa "esta computadora". 
5) curl es una herramienta de línea de comandos que se usa en la terminal para transferir datos desde o hacia un servidor. Es util ya que es rapido y directo, muestra datos ocultos con "-i o -I", entre otras funcionalidades. 

ejericio7:
2) las respuestas fueron:
    curl http://localhost:4000/ = <h1>página de inicio</h1>
    curl http://localhost:4000/alumnos = <h1>Los alumos aprobados son:</h1><p>Carlos, Maria y Juan</p>
    curl http://localhost:4000/error = <h1>Error 404</h1>