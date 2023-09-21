import Usuario from '../models/usuario.model.js';

import { Op } from 'sequelize';

async function createUser(user) {
	try {
		return await Usuario.create(user);
	} catch (error) {
		throw error;
	}
}

async function getUsers() {
	try {
		return await Usuario.findAll();
	} catch (error) {
		throw error;
	}
}

async function getUser(id) {
	try {
		return await Usuario.findByPk(id);
	} catch (error) {
		throw error;
	}
}

async function login(email, senha) {
	try {
		return await Usuario.findAll({
			attributes: ['email', 'senha', 'usuario_id', 'nome'],
			where: {
				[Op.and]: [{ email: email }, { senha: senha }],
			},
		});
	} catch (error) {
		throw error;
	}
}

async function updateUser(id, user) {
	try {
		await Usuario.update(user, {
			where: {
				usuarioId: id,
			},
		});

		return await getUser(id);
	} catch (error) {
		throw error;
	}
}

async function deleteUser(id) {
	try {
		return await Usuario.destroy({
			where: {
				usuarioId: id,
			},
		});
	} catch (error) {
		throw error;
	}
}

export default {
	createUser,
	getUsers,
	getUser,
	login,
	updateUser,
	deleteUser,
};
