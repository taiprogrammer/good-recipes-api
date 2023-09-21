import express from 'express';
import verifyJWT from '../utils/webtoken.js';
import UsuarioController from '../controllers/usuario.controller.js';

const router = express.Router();

router.post('/', UsuarioController.createUser);

router.get('/', UsuarioController.getUsers);

router.get('/:id', verifyJWT, UsuarioController.getUser);

router.post('/login', UsuarioController.login);

router.put('/:id', verifyJWT, UsuarioController.updateUser);

router.delete('/:id', verifyJWT, UsuarioController.deleteUser);

export default router;
