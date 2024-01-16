// const Ingredient = require('./Ingredient');
const User = require('./User');
const Recipe = require('./Recipe');

User.hasMany(Recipe, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Recipe.belongsTo(User, {
  foreignKey: 'user_id',
});

// module.exports = { Ingredient, User, Recipe };
module.exports = { User, Recipe };

