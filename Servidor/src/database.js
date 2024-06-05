import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

// Cargar variables de entrono
dotenv.config();

// Crear una instancia de sequelize e indicar credenciales del servidor MySQL
const sequelize = new Sequelize(
    process.env.MySQL_DATABASE,
    process.env.MySQL_USER,
    process.env.MySQL_PASSWORD,
    {
    host: 'localhost',
    dialect: 'mysql'
});

// Probar la conexión a la base de datos
sequelize.authenticate()
.then(console.log("Conexion establecida a la base de datos!!!"))
.catch(err => console.log("Error de conexion a la base de datos: ", err));

export default sequelize;