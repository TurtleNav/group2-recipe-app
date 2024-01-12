const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Ingredient extends Model {}

Ingredient.init({

},
{

}
);

module.exports = Ingredient;

