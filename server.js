//Usamos la librería express para crear nuestro servidor
const express = require('express');
//Gestionar las diferentes peticiones, router
//Permitir separar cabeceras y métodos, peticiones al máxmio
const router = express.Router()
//Inicializando nuestro servidor
const app = express();

//Añadir router a la aplicacion de express
app.use(router);
//Peticiones Get
router.get('/message', (req, res) =>{
    res.send('Lista de mensajes')
});
//Peticiones Post
router.post('/message', (req, res) =>{
    res.send('Mensaje añadido')
});


//Ejecutar nuestra aplicación de express (Utilizar un puerto) -> Por donde va a escuchar?
app.listen(3001);
//Mensaje de verificación
console.log('La aplicación se está escuchando en http://localhost:3001');


