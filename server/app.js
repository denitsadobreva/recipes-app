const express = require("express");
const bodyParser = require("body-parser");

const { getStoredRecipes, storeRecipes } = require("./data/recipes");

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  // Attach CORS headers
  // Required when using a detached backend (that runs on a different domain)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

app.get("/recipes", async (req, res) => {
  const storedRecipes = await getStoredRecipes();
  // await new Promise((resolve, reject) => setTimeout(() => resolve(), 1500));
  res.json({ recipes: storedRecipes });
});

app.get("/recipes/:id", async (req, res) => {
  const storedRecipes = await getStoredRecipes();
  const recipe = storedRecipes.find((post) => post.id === req.params.id);
  res.json({ recipe });
});

app.post("/recipes", async (req, res) => {
  const existingRecipes = await getStoredRecipes();
  const recipeData = req.body;
  const newRecipe = {
    ...recipeData,
    id: Math.random().toString(),
  };
  const updatedRecipes = [newRecipe, ...existingRecipes];
  await storeRecipes(updatedRecipes);
  res.status(201).json({ message: "Stored new recipe.", recipe: newRecipe });
});

app.delete("/recipes/:id", async (req, res) => {
  const existingRecipes = await getStoredRecipes();
  const updatedRecipes = existingRecipes.filter(
    (recipe) => recipe.id !== req.params.id
  );
  await storeRecipes(updatedRecipes);
  res.status(200).json({ message: "Deleted recipe." });
});

app.put("/recipes/:id", async (req, res) => {
  const existingRecipes = await getStoredRecipes();
  const recipeData = req.body;
  const recipeIndex = existingRecipes.findIndex(
    (recipe) => recipe.id === req.params.id
  );
  if (recipeIndex < 0) {
    return res.status(404).json({ message: "Recipe not found." });
  }
  const updatedRecipe = {
    ...existingRecipes[recipeIndex],
    ...recipeData,
  };
  existingRecipes[recipeIndex] = updatedRecipe;
  await storeRecipes(existingRecipes);
  res.status(200).json({ message: "Updated recipe.", recipe: updatedRecipe });
});

app.listen(8080);
