import { v4 as uuidv4 } from "uuid";
import userModel from "../models/users_model.js";

// Obtener los usuarios de la base de datos
const getAllUsersController = async (req, res) => {
    try {
        // Buscar todos los usuarios en la base de datos
        const users = await userModel.findAll();
        res.status(200).json(users); // Enviar una respuesta
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

// Obtener un usaurio por su ID
const getUserByIdController = async (req, res) => {
    try {
        // Buscar un usuario por su id
        const user = await userModel.findByPk(req.params.id);
        res.status(200).json(user); // Enviar una respuesta
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

// Crear un usuario nuevo
const createUserController = async (req, res) => {
    try {
        // Crear un nuevo usuario
        const newUser = {
            id: uuidv4(), // Generacion de ids aleatorias
            ...req.body // Resto de informacion proveniente del request
        }
        const user = await userModel.create(newUser);
        res.status(200).json(user); // Enviar una respuesta
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

// Exportar los controladores
export {
    getAllUsersController,
    getUserByIdController,
    createUserController
}