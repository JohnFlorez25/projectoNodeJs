//Vamos a crear toda la lógica de almacenamiento
//Creamos un mock : servicio que valida que todo funciona correctamente
//tenemos una lista de mensajes que se van guardando
const list = [];

const addMessage = (message) => {
    list.push(message);
}

const getMessages = () => {
    return list;
}

module.exports = {
    add: addMessage,
    list: getMessages,
    //get
    //update
    //delete
}