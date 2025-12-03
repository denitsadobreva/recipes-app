import Header from "./components/Header";
import RecipeList from "./components/RecipeList";
import NewRecipe from "./components/NewRecipe";
import Modal from "./components/Modal";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [showNewRecipe, setShowNewRecipe] = useState(false);

  useEffect(() => {
    async function fetchRecipes() {
      const response = await fetch("http://localhost:8080/recipes");
      const data = await response.json();
      setRecipes(data.recipes);
    }

    fetchRecipes();
  }, []);

  const openNewRecipeHandler = () => {
    setShowNewRecipe(true);
  };

  const closeNewRecipeHandler = () => {
    setShowNewRecipe(false);
  };

  const saveNewRecipeHandler = async (newRecipe) => {
    console.log(newRecipe);
    const response = await fetch("http://localhost:8080/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRecipe),
    });
    const data = await response.json();
    setRecipes((prevRecipes) => [...prevRecipes, data.recipe]);
  };

  const deleteRecipeHandler = async (id) => {
    await fetch(`http://localhost:8080/recipes/${id}`, {
      method: "DELETE",
    });
    setRecipes((prevRecipes) =>
      prevRecipes.filter((recipe) => recipe.id !== id)
    );
  };

  return (
    <div className="w-full p-10">
      {showNewRecipe && (
        <Modal>
          <NewRecipe
            onCancel={closeNewRecipeHandler}
            onSave={saveNewRecipeHandler}
          />
        </Modal>
      )}
      <Header onOpenNewRecipe={openNewRecipeHandler} />
      <RecipeList recipes={recipes} onDelete={deleteRecipeHandler} />
    </div>
  );
}

export default App;
