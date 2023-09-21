import Receita from '../models/receita.model.js';
import Favorito from '../models/favorito.model.js';
import Receita_Favorito from '../models/receita_favorito.model.js';

async function createFavoriteRecipe(favoriteRecipe) {
	try {
		return await Receita_Favorito.create(favoriteRecipe);
	} catch (error) {
		throw error;
	}
}

async function getRecentsRecipes() {
	try {
		return await Receita_Favorito.findAll({
			include: [
				{
					model: Receita,
					required: true,
					attributes: [
						'nome',
						'imagem',
						'horas',
						'minutos',
						'segundos',
						'porcoes',
						'receita_id',
					],
				},
				{
					model: Favorito,
					required: true,
					attributes: ['quantidade'],
				},
			],
			order: [['receita_id', 'DESC']],
			limit: 5,
		});
	} catch (error) {
		throw error;
	}
}

async function getMostFavorites() {
	try {
		return await Receita_Favorito.findAll({
			include: [
				{
					model: Receita,
					required: true,
					attributes: [
						'nome',
						'imagem',
						'horas',
						'minutos',
						'segundos',
						'porcoes',
						'receita_id',
					],
				},
				{
					model: Favorito,
					required: true,
					attributes: ['quantidade'],
					order: [['quantidade', 'ASC']],
				},
			],
			limit: 5,
		});
	} catch (error) {
		throw error;
	}
}

export default {
	createFavoriteRecipe,
	getRecentsRecipes,
	getMostFavorites,
};
