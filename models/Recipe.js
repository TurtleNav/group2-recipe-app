const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Recipe extends Model {}

Recipe.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    calories: {
      type: DataTypes.DECIMAL,
    },
    protein: {
      type: DataTypes.DECIMAL,
    },
    carbs: {
      type: DataTypes.DECIMAL,
    },

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'recipe',

  }
);

module.exports = Recipe;
