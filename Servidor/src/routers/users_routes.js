import { Router } from "express";
import { getAllUsersController, getUserByIdController, createUserController } from '../controllers/users_controller.js'

// Crear una instancia de Router
const router = Router();

// Rutas
router.get('/users', getAllUsersController);
router.get('/users/:id', getUserByIdController);
router.post('/users', createUserController);

export default router;