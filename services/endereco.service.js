import EnderecoRepository from '../repositories/endereco.repository.js';

async function createAddress(address) {
	return await EnderecoRepository.createAddress(address);
}

async function getAddressesByUserId(id) {
	return await EnderecoRepository.getAddressesByUserId(id);
}

async function getAddress(id) {
	return await EnderecoRepository.getAddress(id);
}

async function updateAddress(id, newAddress) {
	return await EnderecoRepository.updateAddress(id, newAddress);
}

async function deleteAddress(id) {
	return await EnderecoRepository.deleteAddress(id);
}

export default {
	createAddress,
	getAddressesByUserId,
	getAddress,
	updateAddress,
	deleteAddress,
};
