//Archivo que define todo lo que sucede con las funciones necesarias
//1. AÑADIR UN NUEVO MENSAJE

const addMessage = (user, message) => {
    //Trabajando con promesas
    return new Promise( (resolve, reject) =>{
        //comprobar que exista un usuario
        if(!user || !message){
            console.error('[messageController] No hay usuario o mensaje')
            return reject('Datos incorrectos');
        }
        //fecha del mensaje
        const fullMessage = {
            user: user,
            message: message,
            date: new Date()
        };
        console.log(fullMessage);
        resolve(fullMessage)
    });
}

//exportar todas las funciones que deseemos
module.exports = {
    addMessage
}