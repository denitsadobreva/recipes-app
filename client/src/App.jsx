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

  return (
    <div className="w-full p-10">
      {showNewRecipe && (
        <Modal>
          <NewRecipe />
        </Modal>
      )}
      <Header onOpenNewRecipe={openNewRecipeHandler} />
      <RecipeList recipes={recipes} />
    </div>
  );
}

export default App;
