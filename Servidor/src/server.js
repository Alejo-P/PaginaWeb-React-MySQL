import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import userRoutes from './routers/users_routes.js';

// Crear una Instancia de express y cargar las variables de entorno
const app = express();
dotenv.config();

// Configuración del puerto
app.set('port',process.env.PORT || 3000);

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Rutas
app.get('/',(req,res)=>{
    res.json({message: "Bienvenido a mi API"});
});
app.use("/api/v1",userRoutes);

// Exportar la aplicación
export default app;