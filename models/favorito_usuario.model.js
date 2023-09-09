import Sequelize from "sequelize";
import sequelize from "../config/postgres.database.js";

import Usuario from "./usuario.model.js";
import Favorito from "./favorito.model.js";

const Favorito_Usuario = sequelize.define(
  "favorito_usuario",
  {
    favoritoUsuarioId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
  },
  {
    underscored: true,
    tableName: "favorito_usuario",
    name: { singular: "favorito_usuario", plural: "favorito_usuario" },
  }
);

Favorito_Usuario.belongsTo(Usuario, { foreignKey: "usuarioId" });
Favorito_Usuario.belongsTo(Favorito, { foreignKey: "favoritoId" });

export default Favorito_Usuario;
