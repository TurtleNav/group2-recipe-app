const express = require("express");
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});

const PORT = process.env.PORT || 3001;

const app = express();
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars ");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => console.log(`Now Listening`));
