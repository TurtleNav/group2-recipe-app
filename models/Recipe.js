const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Recipe extends Model {}

// store image link, sodium, and cholesterol
Recipe.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    spoonacular_id: {
      type: DataTypes.INTEGER,
    },
    title: {
      type: DataTypes.STRING, // Up to 255 characters *SHOULD* be long enough for a recipe name
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      // Make sure image link is a valid hyper link such as 'https://abcdefgh.com'
      validate: {
        isUrl: true,
      },
    },
    calories: {
      type: DataTypes.DECIMAL,
    },
    carbs: {
      type: DataTypes.DECIMAL,
    },
    fat: {
      type: DataTypes.DECIMAL,
    },
    protein: {
      type: DataTypes.DECIMAL,
    },
    sodium: {
      type: DataTypes.DECIMAL,
    },
    cholesterol: {
      type: DataTypes.DECIMAL,
    },
    sugar: {
      type: DataTypes.DECIMAL,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
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
