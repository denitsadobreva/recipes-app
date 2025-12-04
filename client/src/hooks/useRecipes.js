import { useState, useEffect } from "react";

export function useRecipes() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    async function fetchRecipes() {
      const response = await fetch("http://localhost:8080/recipes");
      const data = await response.json();
      setRecipes(data.recipes);
    }

    fetchRecipes();
  }, []);

  const addRecipe = async (newRecipe) => {
    console.log(newRecipe);
    const response = await fetch("http://localhost:8080/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRecipe),
    });
    const data = await response.json();
    setRecipes((prevRecipes) => [data.recipe, ...prevRecipes]);
  };

  const deleteRecipe = async (id) => {
    await fetch(`http://localhost:8080/recipes/${id}`, {
      method: "DELETE",
    });
    setRecipes((prevRecipes) =>
      prevRecipes.filter((recipe) => recipe.id !== id)
    );
  };

  const updateRecipe = async (id, updatedRecipe) => {
    const response = await fetch(`http://localhost:8080/recipes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedRecipe),
    });
    const data = await response.json();
    setRecipes((prevRecipes) =>
      prevRecipes.map((recipe) => (recipe.id === id ? data.recipe : recipe))
    );
  };

  return { recipes, addRecipe, deleteRecipe, updateRecipe };
}
