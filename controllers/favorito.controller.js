import FavoritoService from "../services/favorito.service.js";

import { api } from "../config/axios.js";

async function createFavorite(req, res, next) {
  try {
    const favorite = req.body;
    const favorites = await api.get(`/favorite/${favorite.receitaId}/recipe`);

    console.log("favorites", favorites.data);

    if (!favorite.usuarioId || !favorite.receitaId) {
      throw new Error("Parametros obrigatórios faltantes");
    }

    if (favorites.data.length > 0) {
      favorites.data.map(async (item) => {
        if (
          item.receitaId === favorite.receitaId &&
          item.usuarioId !== favorite.usuarioId
        ) {
          const payload = {
            ...favorite,
            quantidade: parseInt(item.quantidade) + 1,
          };
          res.status(201).send(await FavoritoService.updateFavorite(payload));
        }
        if (
          item.receitaId === favorite.receitaId &&
          item.usuarioId === favorite.usuarioId
        ) {
          res.status(400).send({ message: "Favorito já existente!" });
          throw new Error("Favorito já existente!");
        }
        if (
          item.receitaId !== favorite.receitaId &&
          item.usuarioId !== favorite.usuarioId
        ) {
          const payload = {
            ...favorite,
            quantidade: 1,
          };
          res.status(201).send(await FavoritoService.createFavorite(payload));
        }
      });
    } else {
      const payload = {
        ...favorite,
        quantidade: 1,
      };
      res.status(201).send(await FavoritoService.createFavorite(payload));
    }
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
