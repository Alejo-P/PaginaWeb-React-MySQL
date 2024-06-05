import { Router } from "express";
import { getAllUsersController, getUserByIdController, createUserController } from '../controllers/users_controller.js'

// Crear una instancia de Router
const router = Router();

// Rutas segun se requiera
router.get('/users', getAllUsersController); // Ruta para obtnener todos los usuarios
router.get('/users/:id', getUserByIdController); // Ruta para obtener un usuario por su ID
router.post('/users', createUserController); // Ruta para crear un usuario nuevo

// Exportar el router
export default router;