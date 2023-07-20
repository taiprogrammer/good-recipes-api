import UsuarioRepository from "../repositories/usuario.repository.js";

async function createUser(user) {
  return await UsuarioRepository.createUser(user);
}

async function getUsers() {
  return await UsuarioRepository.getUsers();
}

async function getUser(id) {
  return await UsuarioRepository.getUser(id);
}

async function login(email, senha) {
  return await UsuarioRepository.login(email, senha);
}

async function updateUser(id, user) {
  return await UsuarioRepository.updateUser(id, user);
}

async function getRecipes(id) {
  return await UsuarioRepository.getRecipes(id);
}

async function deleteUser(id) {
  return await UsuarioRepository.deleteUser(id);
}

export default {
  createUser,
  getUsers,
  getUser,
  login,
  updateUser,
  getRecipes,
  deleteUser,
};
