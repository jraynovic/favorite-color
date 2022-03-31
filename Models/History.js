const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");
class History extends Model {}

History.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    color: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "history",
  }
);

module.exports = History;
