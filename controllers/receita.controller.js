import ReceitaService from '../services/receita.service.js';
import FavoritoService from '../services/favorito.service.js';
import ReceitaFavoritoService from '../services/receitaFavorito.service.js';

import { logger } from '../log/index.log.js';

async function createRecipe(req, res, next) {
	try {
		const file = req.file;
		const recipeInfo = req.body;
		const recipe = {
			...recipeInfo,
			imagem: file.path,
		};

		if (!recipe.nome || !recipe.porcoes 
      || !recipe.ingredientes) {
			throw new Error('Parametros obrigatórios faltantes');
		}

		const response_favorite = await FavoritoService.createEmptyFavorite({ quantidade: 0 });

		const response_recipe = await ReceitaService.createRecipe(recipe);

		await ReceitaFavoritoService.createFavoriteRecipe({ receitaId: response_recipe.receitaId, favoritoId: response_favorite.favoritoId });

		res.status(201).send(response_recipe);
		logger.info(`POST - /recipe - ${JSON.stringify(recipe)}`);
	} catch (error) {
		next(error);
	}
}

async function getRecipes(req, res, next) {
	try {
		res.status(200).send(await ReceitaService.getRecipes());
		logger.info('GET /recipe');
	} catch (error) {
		next(error);
	}
}

async function getRecipe(req, res, next) {
	try {
		const { id } = req.params;

		res.status(200).send(await ReceitaService.getRecipe(parseInt(id)));
		logger.info(`GET /recipe/${id}`);
	} catch (error) {
		next(error);
	}
}

async function getUserRecipes(req, res, next) {
	try {
		const { id } = req.params;
		res.status(200).send(await ReceitaService.getUserRecipes(id));
		logger.info(`GET /recipe/${id}/my-recipes`);
	} catch (error) {
		next(error);
	}
}

async function updateRecipe(req, res, next) {
	try {
		const { id } = req.params;
		const recipe = req.body;

		if (
			!recipe.nome ||
      !recipe.tempo ||
      !recipe.porcoes ||
      !recipe.ingredientes ||
      !recipe.modoPreparo ||
      !recipe.usuarioId
		) {
			throw new Error('Parametros obrigatórios faltantes');
		}

		res
			.status(200)
			.send(await ReceitaService.updateRecipe(parseInt(id), recipe));
		logger.info(`PUT /recipe/${id} - ${JSON.stringify(recipe)}`);
	} catch (error) {
		next(error);
	}
}

async function deleteRecipe(req, res, next) {
	try {
		const { id } = req.params;

		res.sendStatus(200).send(await ReceitaService.deleteRecipe(parseInt(id)));
		logger.info(`DELETE /recipe/${id}`);
	} catch (error) {
		next(error);
	}
}

export default {
	createRecipe,
	getRecipes,
	getRecipe,
	getUserRecipes,
	updateRecipe,
	deleteRecipe,
};
