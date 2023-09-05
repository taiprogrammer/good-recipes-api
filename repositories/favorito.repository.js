import Favorito from "../models/favorito.model.js";
import Receita from "../models/receita.model.js";

import { Op } from "sequelize";

async function createFavorite(favorite) {
  try {
    return await Favorito.create(favorite);
  } catch (error) {
    throw error;
  }
}

async function getUserFavorites(id) {
  try {
    return await Favorito.findAll({
      attributes: ["quantidade"],
      where: {
        [Op.and]: [{ usuario_id: id }],
      },
      include: [{
        model: Receita,
        required: true,
        attributes: ["nome", "imagem", "horas", "minutos", "segundos", "porcoes", "receita_id"]
      }]
    })
  } catch (error) {
    throw error;
  }
}

async function getMostFavorites() {
  try {
    return await Favorito.findAll({
      attributes: ["quantidade"],
      raw: true,
      include: [{
        model: Receita,
        required: true,
        attributes: ["nome", "imagem", "horas", "minutos", "segundos", "porcoes", "receita_id"]
      }],
      order: [["quantidade", "DESC"]],
      limit: 5,
    })
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
    })
  } catch (error) {
    throw error;
  }
}

export default {
  createFavorite,
  getUserFavorites,
  getMostFavorites,
  deleteFavorite,
};
