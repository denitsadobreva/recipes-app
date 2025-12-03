import Header from "./components/Header";
import RecipeList from "./components/RecipeList";
import NewRecipe from "./components/NewRecipe";
import Modal from "./components/Modal";
import { useState } from "react";
import { useEffect } from "react";
import { useRecipes } from "./hooks/useRecipes";

function App() {
  const { recipes, addRecipe, deleteRecipe } = useRecipes();
  const [showNewRecipe, setShowNewRecipe] = useState(false);

  const openNewRecipeHandler = () => {
    setShowNewRecipe(true);
  };

  const closeNewRecipeHandler = () => {
    setShowNewRecipe(false);
  };

  return (
    <div className="w-full p-10">
      {showNewRecipe && (
        <Modal>
          <NewRecipe onCancel={closeNewRecipeHandler} onSave={addRecipe} />
        </Modal>
      )}
      <Header onOpenNewRecipe={openNewRecipeHandler} />
      <RecipeList recipes={recipes} onDelete={deleteRecipe} />
    </div>
  );
}

export default App;
