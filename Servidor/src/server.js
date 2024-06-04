import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import userRoutes from './routers/users_routes.js'

const app = express();
dotenv.config();

app.set('port',process.env.PORT || 3000);

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/',(req,res)=>{
    res.json({message: "Bienvenido a mi API"});
});

app.use("/api/v1",userRoutes);

export default app;