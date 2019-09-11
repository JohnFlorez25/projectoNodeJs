const express = require('express');
//importar response
const response = require('../../network/response');
//importando el controlador
const controller = require('./controller');
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
    
    //como es una promesa puedo usar then y catch
    controller.addMessage(req.body.user, req.body.message)
        //responder con fullMessage
        .then((fullMessage) =>{
            response.success(req,res, fullMessage, 201);
        })
        .catch(e => {
            response.error(req,res, 'Información Inválida', 400, 'Error en el controlador');
        });
});

//exportar los router
module.exports = router;