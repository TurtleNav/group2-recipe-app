const sequelize = require('../config/connection');

const {seedUsers} = require('./userData');
const seedRecipes = require('./recipeData');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await seedUsers();
  await seedRecipes();

  process.exit(0);
};

seedDatabase();