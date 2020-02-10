
module.exports = (sequelize, type) => {
    return sequelize.define('Entrada', {
        Fecha_Entrada: {type: type.DATE},
        Kilos_Entrada: {type: type.INTEGER}
    })
}