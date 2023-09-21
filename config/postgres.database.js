import Sequelize from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(
	`postgres://waxmasba:${process.env.PASSWORD}@mahmud.db.elephantsql.com/waxmasba`,
	{
		dialect: 'postgres',
		define: {
			timestamps: false,
		},
	}
);

export default sequelize;
