//Observando como funciona el body y query
const express = require('express');
//Body.parser nos permite trabajar con el body de la petición de forma sencilla
//npm i body-parser
const bodyParser = require('body-parser');
const router = express.Router()

const app = express();
//tipos de body que quiero enviar
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(router);


router.get('/message', (req, res) =>{
    res.send('Lista de mensajes')
});
//El body siempre lo encontramos en el request
router.delete('/message', (req, res) =>{
    //trabajanco con el cuerpo
    console.log(req.body)
    //acceder a los parametros por query
    //http://localhost:3001/message?orderBy=id&age=26
    console.log(req.query)
    res.send('Mensaje '+ req.body.name + ' añadido correctamente');
});


//Ejecutar nuestra aplicación de express (Utilizar un puerto) -> Por donde va a escuchar?
app.listen(3001);
//Mensaje de verificación
console.log('La aplicación se está escuchando en http://localhost:3001');


