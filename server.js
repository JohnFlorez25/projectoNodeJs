//Usando las cabeceras: saber de donde vienen la petición
//las peticiones se envian por la REQUEST
const express = require('express');

const bodyParser = require('body-parser');
const router = express.Router()

const app = express();
//tipos de body que quiero enviar
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(router);

//http://localhost:3001/message
router.get('/message', (req, res) =>{
    //Accediendo a las cabeceras
    console.log(req.headers)
    //Tambien puedo enviar header en la respuesta
    res.header({
        "custom-header": "nuestro valor personalizado",
    })
    res.send('Lista de mensajes')
});

router.delete('/message', (req, res) =>{
    console.log(req.body)
    console.log(req.query)
    res.send('Mensaje '+ req.body.name + ' añadido correctamente');
});


//Ejecutar nuestra aplicación de express (Utilizar un puerto) -> Por donde va a escuchar?
app.listen(3001);
//Mensaje de verificación
console.log('La aplicación se está escuchando en http://localhost:3001');


