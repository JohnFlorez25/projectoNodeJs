//La capa de RED recibe todas las peticiones HTTP, procesar información y enviarla
//al controlador

//necesitamos importar express
const express = require('express');
//importar response
const response = require('../../network/response');
//crear el router
const router = express.Router();

router.get('/', (req, res) =>{

    console.log(req.headers)
    res.header({
        "custom-header": "nuestro valor personalizado",
    })
    
    response.success(req,res, 'Lista de mensajes');
});

router.post('/', (req, res) =>{
    console.log(req.body)
    
    if(req.query.error == "ok"){
        response.error(req,res, 'Error inesperado', 500, 'Es solo una simulación de los errores');
    }else{
        response.success(req,res, 'Creado correctamente',201);
    }
    
});

//exportar los router
module.exports = router;