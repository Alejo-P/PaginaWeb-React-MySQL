import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();


const sequelize = new Sequelize(
    process.env.MySQL_DATABASE,
    process.env.MySQL_USER,
    process.env.MySQL_PASSWORD,
    {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
.then(console.log("Conexion establecida a la base de datos!!!"))
.catch(err => console.log("Error de conexion a la base de datos: ", err));

export default sequelize;