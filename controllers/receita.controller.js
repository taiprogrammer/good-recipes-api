import ReceitaService from "../services/receita.service.js";
import { logger } from "../log/index.log.js";

async function createRecipe(req, res, next) {
  try {
    const file = req.file;
    const recipeInfo = req.body;
    const recipe = {
      ...recipeInfo,
      imagem: file.path,
    };

    console.log(req);
    if (!recipe.nome || !recipe.porcoes || !recipe.ingredientes) {
      throw new Error("Parametros obrigatórios faltantes");
    }

    res.status(201).send(await ReceitaService.createRecipe(recipe));
    logger.info(`POST - /recipe - ${JSON.stringify(recipe)}`);
  } catch (error) {
    next(error);
  }
}

async function getRecipes(req, res, next) {
  try {
    res.status(200).send(await ReceitaService.getRecipes());
    logger.info("GET /recipe");
  } catch (error) {
    next(error);
  }
}

async function getRecipe(req, res, next) {
  try {
    const { id } = req.params;

    res.status(200).send(await ReceitaService.getRecipe(parseInt(id)));
    logger.info(`GET /recipe/${id}`);
  } catch (error) {
    next(error);
  }
}

async function updateRecipe(req, res, next) {
  try {
    const { id } = req.params;
    const recipe = req.body;

    if (
      !recipe.nome ||
      !recipe.tempo ||
      !recipe.porcoes ||
      !recipe.ingredientes ||
      !recipe.modoPreparo ||
      !recipe.usuarioId
    ) {
      throw new Error("Parametros obrigatórios faltantes");
    }

    res
      .status(200)
      .send(await ReceitaService.updateRecipe(parseInt(id), recipe));
    logger.info(`PUT /recipe/${id} - ${JSON.stringify(recipe)}`);
  } catch (error) {
    next(error);
  }
}

async function deleteRecipe(req, res, next) {
  try {
    const { id } = req.params;

    res.sendStatus(200).send(await ReceitaService.deleteRecipe(parseInt(id)));
    logger.info(`DELETE /recipe/${id}`);
  } catch (error) {
    next(error);
  }
}

export default {
  createRecipe,
  getRecipes,
  getRecipe,
  updateRecipe,
  deleteRecipe,
};
