exports.success = (req, res, message, status) =>{
    res.status(status || 200).send({
        error : '',
        body : message
    });
}
//Agregando detalles a los errores
exports.error = (req, res, message, status, details) => {
    //me permite genera run log de lo sucedido
    //informacion al detalle
    console.log('[response error] '+details)
    //mensaje que le doy al usuario no tienen que ser el mismo de details
    res.status(status || 500).send({
        error : message,
        body : ''
    });
}