import Endereco from "../models/endereco.model.js"

import { Op } from "sequelize";

async function createAddress(address) {

  try {
    return await Endereco.create(address);
  } catch (error) {
    throw error;
  }
}

async function getAddressesByUserId(id) {
  try {
    return await Endereco.findAll({
      attributes: ["endereco_id", "logradouro", "numero", "cep", "cidade", "pais"],
      where: {
        [Op.and]: [{ usuario_id: id }]
      }
    })
  } catch (error) {
    throw error;
  }
}

async function getAddress(id) {
  try {
    return await Endereco.findAll({
      attributes: ["endereco_id", "logradouro", "numero", "cep", "cidade", "pais"],
      where: {
        [Op.and]: [{ endereco_id: id }]
      }
    })
  } catch (error) {
    throw error;
  }
}

async function updateAddress(id, newAddress) {
  try {

    return await Endereco.update(newAddress, {
      where: {
        enderecoId: id
      }
    })
  } catch (error) {
    throw error;
  }
}

async function deleteAddress(id) {
  try {
    return await Endereco.destroy({
      where: {
        enderecoId: id
      }
    })
  } catch (error) {
    throw error;
  }
}

export default {
  createAddress,
  getAddressesByUserId,
  getAddress,
  updateAddress,
  deleteAddress,
};
