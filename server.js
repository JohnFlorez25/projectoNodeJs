//Errores: Cómo presentarlos e implicaciones de seguridad
const express = require('express');
const bodyParser = require('body-parser');

//Requiriento rutas de mensajes
//const router = require('./components/message/network');
const router = require('./network/routes');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//app.use(router);

//Pasarle el servidor que tenemos creado de nuestra aplicación al router para
//que cree todas las rutas necesarias
router(app);

app.use('/app', express.static('public'))

app.listen(3001);
console.log('La aplicación se está escuchando en http://localhost:3001');


