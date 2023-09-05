import Receita from "../models/receita.model.js";
import Favoritos from "../models/favorito.model.js"

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

async function getRecentRecipes() {
  try {
    return await Receita.findAll({
      order: [["receita_id", "DESC"]],
      limit: 5,
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
  getRecipe,
  getRecentRecipes,
  updateRecipe,
  deleteRecipe,
};
