import RecipeListItem from "./RecipeListItem";

export default function RecipeList({ recipes, onDelete, onUpdate }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-around">
      {recipes.map((recipe) => (
        <RecipeListItem
          key={recipe.id}
          recipe={recipe}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
}
