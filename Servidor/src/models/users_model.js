import pkg from "sequelize";
const { DataTypes } = pkg;
import sequelize from "../database.js";

// Crear un modelo de usuario
const userModel = sequelize.define('User', {
    id: {
        type: DataTypes.STRING, // Especificar el tipo de dato
        primaryKey: true, // Especificar si es clave primaria
        allowNull: false // Especificar si es un campo requerido (No nulo)
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
    tableName: 'users' // Nombre de la tabla en la base de datos
});

export default userModel; // Exportar el modelo