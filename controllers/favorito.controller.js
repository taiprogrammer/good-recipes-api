import FavoritoService from "../services/favorito.service.js";

import { api } from "../config/axios.js";

async function createFavorite(req, res, next) {
  try {
    // TODO
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
    logger.info(`GET /favorite/most-favorites`)
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
  getMostFavorites,
  deleteFavorite,
};
