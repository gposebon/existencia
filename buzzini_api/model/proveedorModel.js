module.exports = (sequelize, type) => {
    return sequelize.define('Proveedor', {
        Nombre_Proveedor: {type: type.STRING},
        Apellido_Proveedor: {type: type.STRING},
        Campo_Proveedor: {type: type.STRING}
    })
}