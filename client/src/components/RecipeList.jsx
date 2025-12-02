import RecipeListItem from "./RecipeListItem";

export default function RecipeList({ recipes }) {
  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.map((recipe) => (
        <RecipeListItem key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}
