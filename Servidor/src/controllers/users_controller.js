import { v4 as uuidv4 } from "uuid";
import userModel from "../models/users_model.js";

// Obtener los usuarios de la base de datos
const getAllUsersController = async (req, res) => {
    try {
        const users = await userModel.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

// Obtener un usaurio por su ID
const getUserByIdController = async (req, res) => {
    try {
        const user = await userModel.findByPk(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

// Crear un usuario nuevo
const createUserController = async (req, res) => {
    try {
        const newUser = {
            id: uuidv4(),
            ...req.body
        }
        const user = await userModel.create(newUser);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

export {
    getAllUsersController,
    getUserByIdController,
    createUserController
}