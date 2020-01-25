module.exports = (sequelize, type) => {
    return sequelize.define('db_proveedor', {
        Nombre_Proveedor: {type: type.STRING},
        Apellido_Proveedor: {type: type.STRING},
        Campo_Proveedor: {type: type.STRING}
    })
}