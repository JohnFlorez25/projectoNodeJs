# Fundamentos de NodeJs y manejo de WebSockets

## Que es nodeJS

Node.js es un entorno en tiempo de ejecución multiplataforma de código abierto para la capa del servidor basado en el lenguaje de programación ECMAScript, asíncrono y basado en el motor V8 de Google.

Muchos proyectos utilizan Node para funcionar, como:

- [Webpack](https://github.com/webpack/webpack)
- [Babel](https://babeljs.io/)
- [PM2](http://pm2.keymetrics.io/)
- [Electron](https://electronjs.org/)

## Que son y como se usan las peticiones HTTP


Una petición HTTP es un protocolo de comunicación que permite las transferencias de información en la web.

Es el lenguaje común para todas las comunicaciones.

¿Cómo es una petición?

GET /index.html HTTP/1.1
Host: www.example.com
Referer: www.google.com
User-Agent: Mozilla/5.0
Connection: keep-alive

Puntos claves a tener en cuenta:

Métodos: Qué quieres hacer
Estado: Cómo ha ido la operación
Cuerpo: Lo que el servidor devuelve

## Métodos, cabeceras y estados

**Métodos** : El verbo que dice "lo que queremos hacer" al servidor

Métodos HTTP:

- **GET:** Recoger información del servidor.
- **POST:** Añadir información al servidor.
- **PUT:** Reemplazar información en el servidor.
- **PATCH:** Actualizar parte de la información.
- **DELETE:** Eliminar información del servidor.
- **OPTIONS:** Pedir información sobre métodos (saber si podemos ejecutar alguno de los métodos anteriores).


**Las cabeceras** brindan información contextual de la petición **no es lo que quiero hacer, sino como quiero hacerlo** serán el envío al servidor de cómo queremos hacer la petición.

Por ejemplo en peticiones **REQUEST** (POST, PUT, PATCH) podemos tener:
- Autenticación (Asegurar que puedo pedir al servidor)
- Cache (Almacenamiento temporal - gestionar durante cuánto tiempo la respuesta será la misma)
- Indicaciones
- Condiciones
- CORS (Manejar información desde fuera de nuestro servicio)
- Cookies (Compartir información entre peticiones)
- Accept (Define el contenido que acepta)

**Los estados** son números que indica el estado de la petición: (que ha pasado con la petición)

2XX: Todo ha ido bien.
3XX: La petición se ha redirigido.
4XX: Errores del cliente.
5XX: Ha habido un error al procesar la petición.

**Sitios para profundizar sobre los estados**

1. [HTTP Status Code](https://httpstatuses.com/)
2. [HTTP Cats](https://http.cat/)

## Cuerpo y Query de la petición

El cuerpo de la petición es la información en sí que queremos enviar, editar o que el servidor nos devuelva.

Las queries van a permitirte añadir información extra a los datos que queramos enviarle al servidor.

## Crear servidor HTTP desde NodeJS

Al instalar node tenemos acceso al comando npm (Node Package Manager) permite gestionar y trabajar con paquetes node en paralelo con otros lenguajes es parecido a librerías o porciones de código de apoyo a nuestra implementación.

## Estructura de una aplicación Node JS
Cualquier aplicación va a tener tres puntos de responsabilidad, que deben responder a tres preguntas:

1. ¿Cómo me comunico con ella?
2. ¿Qué hace?
3. ¿Dónde y cómo se guardan los resultados?

La respuesta a estos tres puntos, corresponden a las tres capas que vamos a generar:

- Capa de red (en inglés “network”)
- Capa controladora (en inglés, “controller”)
- Capa de almacenamiento (en inglés, “store”)


La primera capa es una capa de red, porque la conexión con la aplicación se hace a través del protocolo de comunicación en red HTTP. Es la responsable de comunicar al cliente HTTP con nuestro código del controlador.

El protocolo HTTP construye una petición con una dirección (route), un verbo (method), unas cabeceras (headers) y un mensaje (body).

Por esto, cada uno de nuestros componentes, tendrá un archivo **“network.js”** encargado de traducir la petición del cliente HTTP a la acción que queremos realizar en nuestro controlador.

Así, lo que hace nuestro código (la funcionalidad) no está acoplado a unos requisitos de red, y puede ser reutilizado con otras fuentes de entrada (colas MQTT, una biblioteca externa, microservicios…).
