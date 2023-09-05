import FavoritoRepository from "../repositories/favorito.repository.js";

async function createFavorite(favorite) {
  return await FavoritoRepository.createFavorite(favorite);
}

async function getUserFavorites(id) {
  return await FavoritoRepository.getUserFavorites(id);
}

async function getMostFavorites() {
  return await FavoritoRepository.getMostFavorites();
}

async function deleteFavorite(id) {
  return await FavoritoRepository.deleteFavorite(id);
}

export default {
  createFavorite,
  getUserFavorites,
  getMostFavorites,
  deleteFavorite,
};
