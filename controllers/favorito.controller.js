import FavoritoService from "../services/favorito.service.js";

async function createFavorite(req, res, next) {
  try {
    const favorite = req.body;

    if (!favorite.usuarioId || !favorite.receitaId) {
      throw new Error("Parametros obrigatórios faltantes");
    }

    res.status(201).send(await FavoritoService.createFavorite(favorite));
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

async function getRecipeFavorites(req, res, next) {
  try {
    const { id } = req.params;

    res
      .status(200)
      .send(await FavoritoService.getRecipeFavorites(parseInt(id)));
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
  getUserFavorites,
  getRecipeFavorites,
  deleteFavorite,
};
