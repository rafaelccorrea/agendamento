const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Agenda extends Model {

    }
    Agenda.init(
        {
            name: DataTypes.STRING,
            cellphone: DataTypes.STRING,
            date_compressed: DataTypes.STRING,
            barber_man: DataTypes.STRING,
            userId: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Agenda",
            freezeTableName: true,
            tableName: 'Agenda'
        }
    );
    return Agenda;
};
