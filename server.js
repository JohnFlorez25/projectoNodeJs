//Servir archivos estáticos
const express = require('express');
const bodyParser = require('body-parser');

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
//pasar la carpeta donde quiero guardar los estaticos
app.use('/app', express.static('public'))

app.listen(3001);
console.log('La aplicación se está escuchando en http://localhost:3001');


