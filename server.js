//Tipos de respuestas
// 1. Vacia
// 2. Plana
// 3. Con Datos
// 4. Estruturada
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

    console.log(req.headers)
    res.header({
        "custom-header": "nuestro valor personalizado",
    })
    res.send('Lista de mensajes')
});

router.post('/message', (req, res) =>{
    console.log(req.body)
    console.log(req.query)
    //Respuesta plana
    //res.send('Mensaje '+ req.body.name + ' añadido correctamente');
    //Respuesta vacia
    //res.send();
    //Devolver un estado
    //res.status(201).send();
    //Devolver Objetos con serie de información
    res.status(201).send({error: '', body: 'Creado correctamente'});
});


//Ejecutar nuestra aplicación de express (Utilizar un puerto) -> Por donde va a escuchar?
app.listen(3001);
//Mensaje de verificación
console.log('La aplicación se está escuchando en http://localhost:3001');


