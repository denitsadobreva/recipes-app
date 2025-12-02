import "./App.css";
import Header from "./components/Header";
import RecipeList from "./components/RecipeList";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function fetchRecipes() {
      const response = await fetch("http://localhost:8080/recipes");
      const data = await response.json();
      setRecipes(data.recipes);
    }

    fetchRecipes();
  }, []);

  return (
    <>
      <Header />
      <RecipeList recipes={recipes} />
    </>
  );
}

export default App;
