import ReceitaFavoritoRepository from "../repositories/receitaFavorito.repository.js";

async function createFavoriteRecipe(favoriteRecipe) {
  return await ReceitaFavoritoRepository.createFavoriteRecipe(favoriteRecipe);
}

export default {
  createFavoriteRecipe,
};
