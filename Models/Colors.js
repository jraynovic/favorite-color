const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");
class Colors extends Model {}

Colors.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    color: {
      type: DataTypes.STRING,
    },
    hexCode: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "colors",
  }
);

module.exports = Colors;
