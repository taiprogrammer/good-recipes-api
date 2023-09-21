import { logger } from '../log/index.log.js';
import FavoritoService from '../services/favorito.service.js';

async function createFavorite(req, res, next) {
	try {
		const { favoritoId, usuarioId, quantidade } = req.body;
		const favorito = {
			usuarioId,
			favoritoId,
		};
		await FavoritoService.updateFavorite({ quantidade: quantidade }, favoritoId);
		res.status(200).send(await FavoritoService.createFavorite(favorito));
		logger.info(`POST /favorite - ${JSON.stringify(favorito)}`);
	} catch (error) {
		next(error);
	}
}

async function updateFavorite(req, res, next) {
	try {
		const favorite = req.body;
		const { id } = req.params;

		res.status(200).send(await FavoritoService.updateFavorite(favorite, id));
		logger.info(`PUT /favorite/${id} - ${JSON.stringify(favorite)}`);
	} catch (error) {
		next(error);
	}
}

async function getUserFavorites(req, res, next) {
	try {
		const { id } = req.params;

		res.status(200).send(await FavoritoService.getUserFavorites(parseInt(id)));
		logger.info(`GET /favorite/${id}`);
	} catch (error) {
		next(error);
	}
}

async function getMostFavorites(req, res, next) {
	try {
		res.status(200).send(await FavoritoService.getMostFavorites());
		logger.info('GET /favorite/most-favorites');
	} catch (error) {
		next(error);
	}
}

async function getRecentRecipes(req, res, next) {
	try {
		res.status(200).send(await FavoritoService.getRecentRecipes());
		logger.info('GET /favorite/recents');
	} catch (error) {
		next(error);
	}
}

async function deleteFavorite(req, res, next) {
	try {
		const { id } = req.params;

		const { favoritoUsuarioId, quantidade } = req.body;

		await FavoritoService.deleteUserFavorite(favoritoUsuarioId);

		await res
			.sendStatus(200)
			.send(await FavoritoService.updateFavorite({ quantidade: quantidade }, id));
	} catch (error) {
		next(error);
	}
}

export default {
	createFavorite,
	updateFavorite,
	getUserFavorites,
	getMostFavorites,
	getRecentRecipes,
	deleteFavorite,
};
