
module.exports = (sequelize, type) => {
    return sequelize.define('db_entradas', {
        Fecha_Entrada: {type: type.DATE},
        Kilos_Entrada: {type: type.INTEGER}
    })
}