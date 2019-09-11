const express = require('express');
const message = require('../components/message/network');
//creamos una función que añada todas las rutas
//nuestras rutas cuando llamen a message llama a su componentes
const routes = (server)=>{
    server.use('/message',message )
}

module.exports = routes