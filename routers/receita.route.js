import express from 'express';
import Multer from '../config/multer.js';
import verifyJWT from '../utils/webtoken.js';
import ReceitaController from '../controllers/receita.controller.js';

const router = express.Router();

router.post(
	'/',
	Multer.upload.single('imagem'),
	verifyJWT,
	ReceitaController.createRecipe
);

router.get('/', ReceitaController.getRecipes);

router.get('/:id/my-recipes', verifyJWT, ReceitaController.getUserRecipes);

router.get('/:id', ReceitaController.getRecipe);

export default router;
