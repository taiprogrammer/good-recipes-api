import FavoritoService from "../services/favorito.service.js";

async function createFavorite(req, res, next) {
  try {
    const { favoritoId, usuarioId } = req.body;
    const favorito = {
      usuarioId,
      favoritoId,
    };
    res.status(200).send(await FavoritoService.createFavorite(favorito));
  } catch (error) {
    next(error);
  }
}

async function updateFavorite(req, res, next) {
  try {
    const favorite = req.body;
    const { id } = req.params;

    res.status(200).send(await FavoritoService.updateFavorite(favorite, id));
  } catch (error) {
    next(error);
  }
}

async function getUserFavorites(req, res, next) {
  try {
    const { id } = req.params;

    res.status(200).send(await FavoritoService.getUserFavorites(parseInt(id)));
  } catch (error) {
    next(error);
  }
}

async function getMostFavorites(req, res, next) {
  try {
    res.status(200).send(await FavoritoService.getMostFavorites());
    logger.info(`GET /favorite/most-favorites`);
  } catch (error) {
    next(error);
  }
}

async function getRecentRecipes(req, res, next) {
  try {
    res.status(200).send(await FavoritoService.getRecentRecipes());
    logger.info(`GET /favorite/recents`);
  } catch (error) {
    next(error);
  }
}

async function deleteFavorite(req, res, next) {
  try {
    const { id } = req.params;

    res.sendStatus(200).send(await FavoritoService.deleteFavorite(id));
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
