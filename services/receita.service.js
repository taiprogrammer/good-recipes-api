import ReceitaRepository from "../repositories/receita.repository.js";

async function createRecipe(recipe) {
  return await ReceitaRepository.createRecipe(recipe);
}

async function getRecipes() {
  return await ReceitaRepository.getRecipes();
}

async function getRecipe(id) {
  return await ReceitaRepository.getRecipe(id);
}

async function updateRecipe(id, recipe) {
  return await ReceitaRepository.updateRecipe(id, recipe);
}

async function deleteRecipe(id) {
  return await ReceitaRepository.deleteRecipe(id);
}

export default {
  createRecipe,
  getRecipes,
  getRecipe,
  updateRecipe,
  deleteRecipe,
};
