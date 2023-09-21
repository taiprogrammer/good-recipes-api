import express from 'express';
import EnderecoController from '../controllers/endereco.controller.js';
import verifyJWT from '../utils/webtoken.js';

const router = express.Router();

router.post('/', verifyJWT, EnderecoController.createAddress);

router.get('/:id', verifyJWT, EnderecoController.getAddressesByUserId);

router.post('/:id', verifyJWT, EnderecoController.getAddress);

router.put('/:id', verifyJWT, EnderecoController.updateAddress);

router.delete('/:id', verifyJWT, EnderecoController.deleteAddress);

export default router;
