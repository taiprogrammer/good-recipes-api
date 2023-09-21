import express from 'express';
import verifyJWT from '../utils/webtoken.js';
import FavoritoController from '../controllers/favorito.controller.js';

const router = express.Router();

router.post('/', verifyJWT, FavoritoController.createFavorite);

router.get('/:id', verifyJWT, FavoritoController.getUserFavorites);

router.post('/recents', FavoritoController.getRecentRecipes);

router.post('/most-favorites', FavoritoController.getMostFavorites);

router.put('/:id', verifyJWT, FavoritoController.deleteFavorite);

export default router;
