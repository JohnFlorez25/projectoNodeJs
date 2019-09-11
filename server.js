//RESPUESTAS COHERENTES
//Facil de entender y facil de usar, responder a todas las peticiones
//desde el mismo sitio, agregamos un nuevo archivo, en la carpeta network
//Tenemos todos los elementos de la capa de red de la aplicación completa.

const express = require('express');
const bodyParser = require('body-parser');

//Requiriendo el archivo de response
const response = require('./network/response');

const router = express.Router()

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(router);

//http://localhost:3001/message
router.get('/message', (req, res) =>{

    console.log(req.headers)
    res.header({
        "custom-header": "nuestro valor personalizado",
    })
    //usando response exitoso
    response.success(req,res, 'Lista de mensajes');
});

router.post('/message', (req, res) =>{
    console.log(req.body)
    //console.log(req.query)
    //simulando un error
    if(req.query.error == "ok"){
        response.error(req,res, 'Error simulado', 400);
    }else{
        response.success(req,res, 'Creado correctamente',201);
    }
    
});


app.listen(3001);
console.log('La aplicación se está escuchando en http://localhost:3001');


