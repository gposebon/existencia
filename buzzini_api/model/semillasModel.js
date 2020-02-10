module.exports = (sequelize, type) => {
    return sequelize.define('Semilla', {
        Nombre_Semilla: {type: type.STRING},
        Variedad_Semilla: {type: type.STRING},
        Descripcion_Semilla: {type: type.STRING}
    });
}