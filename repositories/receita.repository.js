import Receita from '../models/receita.model.js';

import { Op } from 'sequelize';
import Receita_Favorito from '../models/receita_favorito.model.js';

async function createRecipe(recipe) {
	try {
		return await Receita.create(recipe);
	} catch (error) {
		throw error;
	}
}

async function getRecipes() {
	try {
		return await Receita.findAll();
	} catch (error) {
		throw error;
	}
}

async function getFilteredRecipe(name) {
	try {
		return await Receita.findAll({
			where: {
				nome: {
					[Op.iLike]: `${name}%`
				}
			},
		});
	} catch (error) {
		throw error;
	}
}

async function getRecipe(id) {
	try {
		return await Receita.findByPk(id);
	} catch (error) {
		throw error;
	}
}

async function updateRecipe(id, recipe) {
	try {
		await Receita.update(recipe, {
			where: {
				receitaId: id,
			},
		});

		return await getRecipe(id);
	} catch (error) {
		throw error;
	}
}

async function getUserRecipes(id) {
	try {
		return await Receita_Favorito.findAll({
			attributes: ['favorito_id'],
			include: [
				{
					model: Receita,
					required: true,
					attributes: [
						'receita_id',
						'imagem',
						'nome',
						'horas',
						'minutos',
						'segundos',
						'porcoes',
					],
					where: {
						[Op.and]: [{ usuario_id: id }],
					},
				},
			],
		});
	} catch (error) {
		throw error;
	}
}

async function deleteRecipe(id) {
	try {
		return await Receita.destroy({
			where: {
				receitaId: id,
			},
		});
	} catch (error) {
		throw error;
	}
}

export default {
	createRecipe,
	getRecipes,
	getFilteredRecipe,
	getRecipe,
	getUserRecipes,
	updateRecipe,
	deleteRecipe,
};
