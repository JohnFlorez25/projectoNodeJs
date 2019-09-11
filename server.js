//Usamos la librería express para crear nuestro servidor
const express = require('express');
//Inicializando nuestro servidor
const app = express();
//para devolver algo....
app.use('/', (req, res)=>{
    res.send("Hola");
});
//Ejecutar nuestra aplicación de express (Utilizar un puerto) -> Por donde va a escuchar?
app.listen(3001);
//Mensaje de verificación
console.log('La aplicación se está escuchando en http://localhost:3001');


