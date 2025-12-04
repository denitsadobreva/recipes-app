export default function Header({ onOpenNewRecipe }) {
  return (
    <header className="flex mb-10">
      <h1 className="basis-2/3 lg:basis-5/6 text-4xl">My Recipes</h1>
      <button
        onClick={onOpenNewRecipe}
        type="button"
        className="basis-1/3 lg:basis-1/6 px-6 py-2 bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600 active:bg-blue-400"
      >
        New Recipe
      </button>
    </header>
  );
}
