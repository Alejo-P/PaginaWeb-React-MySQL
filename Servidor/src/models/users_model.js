import pkg from "sequelize";
const { DataTypes } = pkg;
import sequelize from "../database.js";

// Crear un modelo de usuario
const userModel = sequelize.define('User', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    passwd: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    tableName: 'users'
});

export default userModel;