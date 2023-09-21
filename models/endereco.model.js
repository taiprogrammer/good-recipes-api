import Sequelize from 'sequelize';
import sequelize from '../config/postgres.database.js';
import Usuario from './usuario.model.js';

const Endereco = sequelize.define('endereco', {
	enderecoId: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true,
	},
	logradouro: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	numero: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	cep: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	cidade: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	pais: {
		type: Sequelize.STRING,
		allowNull: false,
	},
},
{
	underscored: true,
	tableName: 'endereco',
	name: { singular: 'endereco', plural: 'endereco' },
}
);

Endereco.belongsTo(Usuario, { foreignKey: 'usuarioId'  });

export default Endereco;