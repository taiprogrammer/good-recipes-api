import Sequelize from 'sequelize';
import sequelize from '../config/postgres.database.js';

const Usuario = sequelize.define(
	'usuario',
	{
		usuarioId: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true,
		},
		nome: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		email: {
			type: Sequelize.STRING,
			allowNull: false,
			isEmail: true,
		},
		senha: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		dataNascimento: {
			type: Sequelize.DATE,
			allowNull: false,
		},
	},
	{
		underscored: true,
		tableName: 'usuario',
		name: { singular: 'usuario', plural: 'usuario' },
	}
);

export default Usuario;
