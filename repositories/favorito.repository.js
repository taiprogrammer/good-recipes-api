import Favorito from "../models/favorito.model.js";
import FavoritoUsuario from "../models/favorito_usuario.model.js";
import Receita from "../models/receita.model.js";

import { Op } from "sequelize";

async function createFavorite(favorite) {
  try {
    await FavoritoUsuario.create(favorite);
  } catch (error) {
    throw error;
  }
}

async function updateFavorite(favorite, id) {
  try {
    return await Favorito.update(favorite, {
      where: {
        favoritoId: id,
      },
    });
  } catch (error) {
    throw error;
  }
}

async function deleteFavorite(id) {
  try {
    return await Favorito.destroy({
      where: {
        favoritoId: id,
      },
    });
  } catch (error) {
    throw error;
  }
}

export default {
  createFavorite,
  updateFavorite,
  deleteFavorite,
};
