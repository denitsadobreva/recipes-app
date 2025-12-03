import Header from "./components/Header";
import RecipeList from "./components/RecipeList";
import NewRecipe from "./components/NewRecipe";
import Modal from "./components/Modal";
import { useState } from "react";
import { useRecipes } from "./hooks/useRecipes";

function App() {
  const { recipes, addRecipe, deleteRecipe, updateRecipe } = useRecipes();
  const [showNewRecipe, setShowNewRecipe] = useState(false);

  const toggleViewNewRecipe = () => {
    setShowNewRecipe((prev) => !prev);
  };

  return (
    <div className="w-full p-10">
      {showNewRecipe && (
        <Modal>
          <NewRecipe onCancel={toggleViewNewRecipe} onSave={addRecipe} />
        </Modal>
      )}
      <Header onOpenNewRecipe={toggleViewNewRecipe} />
      <RecipeList
        recipes={recipes}
        onDelete={deleteRecipe}
        onUpdate={updateRecipe}
      />
    </div>
  );
}

export default App;
