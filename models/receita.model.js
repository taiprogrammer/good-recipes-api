import Sequelize from "sequelize";
import sequelize from "../config/postgres.database.js";
import Usuario from "./usuario.model.js";

const Receita = sequelize.define(
  "receita",
  {
    receitaId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    horas: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    minutos: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    segundos: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    porcoes: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    ingredientes: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    modoPreparo: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    imagem: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  },
  {
    underscored: true,
    tableName: "receita",
    name: { singular: "receita", plural: "receita" },
  }
);

Receita.belongsTo(Usuario, { foreignKey: "usuarioId" });

export default Receita;
