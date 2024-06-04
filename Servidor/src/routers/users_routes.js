import { Router } from "express";
import { getAllUsersController, getUserByIdController, createUserController } from '../controllers/users_controller.js'

const router = Router();

router.get('/users', getAllUsersController);
router.get('/users/:id', getUserByIdController);
router.post('/users', createUserController);

export default router;