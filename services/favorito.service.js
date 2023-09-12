import FavoritoRepository from "../repositories/favorito.repository.js";
import ReceitaFavoritoRepository from "../repositories/receitaFavorito.repository.js";
import UsuarioFavoritoRepository from "../repositories/usuarioFavorito.repository.js";

async function createFavorite(favorite) {
  return await FavoritoRepository.createFavorite(favorite);
}

async function createEmptyFavorite(favorite) {
  return await FavoritoRepository.createEmptyFavorite(favorite);
}

async function updateFavorite(favorite, id) {
  return await FavoritoRepository.updateFavorite(favorite, id);
}

async function getUserFavorites(id) {
  return await UsuarioFavoritoRepository.getUserFavorites(id);
}

async function getMostFavorites() {
  return await ReceitaFavoritoRepository.getMostFavorites();
}

async function getRecentRecipes() {
  return await ReceitaFavoritoRepository.getRecentsRecipes();
}

async function deleteFavorite(id) {
  return await FavoritoRepository.deleteFavorite(id);
}

async function deleteUserFavorite(id) {
  return await UsuarioFavoritoRepository.deleteUserFavorite(id);
}

export default {
  createFavorite,
  createEmptyFavorite,
  updateFavorite,
  getUserFavorites,
  getMostFavorites,
  getRecentRecipes,
  deleteFavorite,
  deleteUserFavorite,
};
