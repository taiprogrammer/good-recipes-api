import { logger } from "../log/index.log.js";
import EnderecoService from "../services/endereco.service.js";

async function createAddress(req, res, next) {
  try {
    const address = req.body;
    if (
      !address.usuarioId ||
      !address.logradouro ||
      !address.numero ||
      !address.cep ||
      !address.cidade ||
      !address.pais
    ) {
      throw new Error("Parametros obrigatórios faltantes");
    }

    await EnderecoService.createAddress(address);

    res.status(201).end();
    logger.info(`POST /address - ${JSON.stringify(address)}`);
  } catch (error) {
    next(error);
  }
}

async function getAddressesByUserId(req, res, next) {
  try {
    const { id } = req.params;

    res
      .status(200)
      .send(await EnderecoService.getAddressesByUserId(parseInt(id)));
  } catch (error) {
    next(error);
  }
}

async function getAddress(req, res, next) {
  try {
    const { id } = req.params;

    res.status(200).send(await EnderecoService.getAddress(id));
  } catch (error) {
    next(error);
  }
}

async function updateAddress(req, res, next) {
  try {
    const { id } = req.params;
    const address = req.body;

    if (
      !address.usuarioId ||
      !address.logradouro ||
      !address.numero ||
      !address.cep ||
      !address.cidade ||
      !address.pais
    ) {
      throw new Error("Parametros obrigatórios faltantes");
    }

    res.status(200).send(await EnderecoService.updateAddress(id, address));
  } catch (error) {
    next(error);
  }
}

async function deleteAddress(req, res, next) {
  try {
    const { id } = req.params;

    await EnderecoService.deleteAddress(id);

    res.sendStatus(200).end();
  } catch (error) {
    next(error);
  }
}

export default {
  createAddress,
  getAddressesByUserId,
  getAddress,
  updateAddress,
  deleteAddress,
};
