module.exports = (sequelize, type) => {
    return sequelize.define('Limpieza', {
        Fecha_Limpieza: {type: type.DATE},
        Kilos_Limpieza: {type: type.DECIMAL},
        Kilos_Basura_Limpieza: {type: type.DECIMAL},
        Kilos_Buenos_Limpieza: {type: type.DECIMAL},
        Kilos_Repaso_Limpieza: {type: type.DECIMAL}
    })    
}