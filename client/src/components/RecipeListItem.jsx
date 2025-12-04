import { useState } from "react";
import Modal from "./Modal";
import Recipe from "./Recipe";

export default function RecipeListItem({ recipe, onDelete, onUpdate }) {
  const [openView, setOpenView] = useState(false);

  const toggleView = () => {
    setOpenView((prev) => !prev);
  };

  return (
    <>
      {openView && (
        <Modal>
          <Recipe
            recipe={recipe}
            onClose={toggleView}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        </Modal>
      )}
      <div className="bg-white rounded-lg shadow-md">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="h-60 w-full object-cover rounded-lg"
        />
        <h3 className="text-lg p-4">{recipe.title}</h3>
        <p className="text-sm px-4 pb-4 truncate w-fill">
          {recipe.description}
        </p>
        <button
          type="button"
          onClick={toggleView}
          className="mb-4 ml-4 px-2 py-1 bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600 active:bg-blue-400"
        >
          View Recipe
        </button>
      </div>
    </>
  );
}
