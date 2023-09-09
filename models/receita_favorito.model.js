import Sequelize from "sequelize";
import sequelize from "../config/postgres.database.js";

import Receita from "./receita.model.js";
import Favorito from "./favorito.model.js";

const Receita_Favorito = sequelize.define(
  "receita_favorito",
  {
    receitaFavoritoId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
  },
  {
    underscored: true,
    tableName: "receita_favorito",
    name: { singular: "receita_favorito", plural: "receita_favorito" },
  }
);

Receita_Favorito.belongsTo(Receita, { foreignKey: "receitaId" });
Receita_Favorito.belongsTo(Favorito, { foreignKey: "favoritoId" });

export default Receita_Favorito;
