const mongoose = require("mongoose");
const Recipe = require("./models/Recipe"); // Import of the model Recipe from './models/Recipe'
const data = require("./data.js"); // Import of the data from './data.js'

mongoose
  .connect("mongodb://localhost/recipeApp", { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to Mongo! yo");
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

// Connection to the database "recipeApp"
Recipe.insertMany(data, function(error, docs) {});
function createRecipe() {
  Recipe.create({
    title: " Gregoire : Asian Glazed Chicken Thighs",
    level: "Amateur Chef",
    ingredients: [
      "1/2 cup rice vinegar",
      "5 tablespoons honey",
      "1/3 cup soy sauce (such as Silver Swan®)",
      "1/4 cup Asian (toasted) sesame oil",
      "3 tablespoons Asian chili garlic sauce",
      "3 tablespoons minced garlic",
      "salt to taste",
      "8 skinless, boneless chicken thighs"
    ],
    cuisine: "Asian",
    dishType: "Dish",
    image: "https://images.media-allrecipes.com/userphotos/720x405/815964.jpg",
    duration: 40,
    creator: "Chef LePapu"
  })
    .then(() => {
      console.log("Recipe Created");
    })
    .catch(err => {
      console.error("Error creating recipe", err);
    });
}

Recipe.updateOne({ title: "Rigatoni alla Genovese" }, { duration: 100 })
  .then(() => {
    console.log("updated done");
  })
  .catch(err => {
    console.error("Error updating", err);
  });

Recipe.deleteOne({ title: "Carrot Cake" }, function(err) {})
  .then(() => {
    console.log("carrot cake deleted");
  })
  .catch(err => {
    console.error("Error deleting the carrot cake", err);
  });

mongoose.connection.close();
//createRecipe();
