const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Cliente extends Model {

    }
    Cliente.init(
        {
            name: DataTypes.STRING,
            cellphone: DataTypes.STRING,
            email: DataTypes.STRING,
            cpf: DataTypes.STRING,
            admin: DataTypes.BOOLEAN,
            password: DataTypes.STRING
        },
        {
            sequelize,
            modelName: "Cliente",
            freezeTableName: true,
            tableName: 'Cliente'
        }
    );
    return Cliente;
};
