import Sequelize from "sequelize";
import sequelize from "../config/postgres.database.js";
import Usuario from "./usuario.model.js";
import Receita from "./receita.model.js";

const Favorito = sequelize.define("favorito", {
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
  tableName: "favorito",
  name: { singular: "favorito", plural: "favorito" },
});


Favorito.belongsTo(Usuario, { foreignKey: "usuarioId"  });
Favorito.belongsTo(Receita, { foreignKey: "receitaId" });

export default Favorito;