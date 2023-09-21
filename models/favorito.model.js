import Sequelize from 'sequelize';
import sequelize from '../config/postgres.database.js';

const Favorito = sequelize.define('favorito', {
	favoritoId: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true,
	},
	quantidade: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},
},
{
	underscored: true,
	tableName: 'favorito',
	name: { singular: 'favorito', plural: 'favorito' },
});

export default Favorito;