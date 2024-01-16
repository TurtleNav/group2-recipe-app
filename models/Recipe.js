const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Recipe extends Model {}

Recipe.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING, // Up to 255 characters *SHOULD* be long enough for a recipe name
    },
    calories: {
      type: DataTypes.INTEGER
    },
    carbs: {
      // type: DataTypes.CHAR(4) // Can never exceed the string of length 4: '100g'
      type: DataTypes.INTEGER
    },
    fat: {
      // type: DataTypes.CHAR(4) // Can never exceed the string of length 4: '100g'
      type: DataTypes.INTEGER
    },
    protein: {
      // type: DataTypes.CHAR(4) // Can never exceed the string of length 4: '100g'
      type: DataTypes.INTEGER
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
