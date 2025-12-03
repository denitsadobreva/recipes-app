export default function RecipeListItem({ recipe }) {
  return (
    <div className=" bg-white rounded-lg shadow-md">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="h-60 w-full object-cover rounded-lg"
      />
      <h3 className="text-lg p-4">{recipe.title}</h3>
      <p className="text-sm px-4 pb-4">{recipe.description}</p>
    </div>
  );
}
