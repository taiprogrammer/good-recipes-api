import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import UsuarioService from "../services/usuario.service.js";

import { logger } from "../log/index.log.js";

dotenv.config();

async function createUser(req, res, next) {
  try {
    const user = req.body;

    if (!user.nome || !user.email || !user.senha || !user.dataNascimento) {
      throw new Error("Parametros obrigatórios faltantes");
    }

    res.status(201).send(await UsuarioService.createUser(user));
    logger.info(`POST /user - ${JSON.stringify(user)}`);
  } catch (error) {
    next(error);
  }
}

async function getUsers(req, res, next) {
  try {
    res.status(200).send(await UsuarioService.getUsers());
    logger.info("GET /user");
  } catch (error) {
    next(error);
  }
}

async function getUser(req, res, next) {
  try {
    const { id } = req.params;

    res.status(200).send(await UsuarioService.getUser(parseInt(id)));
    logger.info(`GET /user/${id}`);
  } catch (error) {
    next(error);
  }
}

async function login(req, res, next) {
  try {
    const credentials = req.body;

    if (!credentials.email || !credentials.senha) {
      throw new Error("Parametros obrigatórios faltantes");
    }

    const response = await UsuarioService.login(
      credentials.email,
      credentials.senha
    );

    if (response.length > 0) {
      const token = jwt.sign(
        { userId: response[0].usuario_id },
        process.env.SECRET_KEY,
        {
          expiresIn: 1000,
        }
      );
      res.status(200).send({ auth: true, token, id: response[0].dataValues.usuario_id, nome: response[0].dataValues.nome });
    } else {
      res
        .status(401)
        .send({ status: 401, message: "Usuário e/ou senha incorretos!" });
    }

    if (response.length <= 0) {
      res.status(404).end();
    }

    logger.info(`GET /user/login - ${JSON.stringify(credentials)}`);
  } catch (error) {
    next(error);
  }
}

async function updateUser(req, res, next) {
  try {
    const { id } = req.params;
    const user = req.body;

    if (!id) {
      throw new Error("Parametros obrigatórios faltantes");
    }

    res.status(200).send(await UsuarioService.updateUser(parseInt(id), user));
    logger.info(`PUT /user/${id} - ${JSON.stringify(user)}`);
  } catch (error) {
    next(error);
  }
}

// async function getRecipes(req, res, next) {
//   try {
//     const { id } = req.params;

//     res.status(200).send(await UsuarioService.getRecipes(parseInt(id)));
//     logger.info(`GET /user/${id}/recipes`);
//   } catch (error) {
//     next(error);
//   }
// }

async function deleteUser(req, res, next) {
  try {
    const { id } = req.params;

    res.sendStatus(200).send(await UsuarioService.deleteUser(parseInt(id)));
    logger(`DELETE /user/${id}`);
  } catch (error) {
    next(error);
  }
}

export default {
  createUser,
  getUsers,
  getUser,
  login,
  updateUser,
  // getRecipes,
  deleteUser,
};
