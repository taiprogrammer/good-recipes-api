import FavoritoUsuario from '../models/favorito_usuario.model.js';
import sequelize from '../config/postgres.database.js';
import { QueryTypes } from 'sequelize';

async function createUserFavorite(favorite) {
	try {
		return await FavoritoUsuario.create(favorite);
	} catch (error) {
		throw error;
	}
}

async function getUserFavorites(id) {
	try {
		return await sequelize.query(
			`
      SELECT 
        f.quantidade, 
        f.favorito_id,
        r.receita_id, 
        r.nome, 
        r.imagem, 
        r.horas, 
        r.minutos, 
        r.segundos,
        fu.favorito_usuario_id,
        r.porcoes FROM favorito_usuario fu 
        INNER JOIN favorito f ON fu.favorito_id = f.favorito_id 
        INNER JOIN receita_favorito rf ON rf.favorito_id = f.favorito_id 
        INNER JOIN receita r ON rf.receita_id = r.receita_id
        WHERE fu.usuario_id = ${id}
      `,
			{ type: QueryTypes.SELECT }
		);
	} catch (error) {
		throw error;
	}
}

async function deleteUserFavorite(id) {
	try {
		return await FavoritoUsuario.destroy({
			where: {
				favoritoUsuarioId: id,
			},
		});
	} catch (error) {
		throw error;
	}
}

export default {
	getUserFavorites,
	createUserFavorite,
	deleteUserFavorite,
};
