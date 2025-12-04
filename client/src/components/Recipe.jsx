import { useState } from "react";

export default function Recipe({ recipe, onClose, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedRecipe, setEditedRecipe] = useState({ ...recipe });

  const handleDetele = () => {
    onDelete(recipe.id);
    onClose();
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (JSON.stringify(editedRecipe) !== JSON.stringify(recipe)) {
      onUpdate(recipe.id, editedRecipe);
    }

    setIsEditing(false);
    onClose();
  };

  const handleChange = (e) => {
    setEditedRecipe({
      ...editedRecipe,
      [e.target.name]: e.target.value,
    });
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedRecipe({ ...recipe });
  };

  return (
    <div className="w-screen h-screen md:h-3/4 md:w-full flex flex-col">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="max-h-50 md:h-120 md:max-w-200 object-cover rounded-lg"
      />

      {isEditing ? (
        <form className="flex flex-col gap-4 p-4" onSubmit={handleUpdate}>
          <p className="flex flex-col gap-2">
            <label htmlFor="title" className="text-sm text-gray-700">
              Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={editedRecipe.title}
              onChange={handleChange}
              className="text-gray-900 outline-1 -outline-offset-1 outline-gray-300 rounded-md bg-white px-3 py-1.5 "
            ></input>
          </p>
          <p className="flex flex-col gap-2">
            <label htmlFor="description" className="text-sm text-gray-700">
              Description:
            </label>
            <textarea
              id="description"
              name="description"
              value={editedRecipe.description}
              onChange={handleChange}
              className="text-gray-900 outline-1 -outline-offset-1 outline-gray-300 rounded-md bg-white px-3 py-1.5 "
            ></textarea>
          </p>
          <div className="flex justify-between">
            <button
              onClick={handleCancelEdit}
              type="button"
              className="px-4 py-2 bg-gray-500 text-white rounded-lg cursor-pointer hover:bg-gray-600 active:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-green-500 text-white rounded-lg cursor-pointer hover:bg-green-600 active:bg-green-400"
            >
              Save
            </button>
          </div>
        </form>
      ) : (
        <div className="flex flex-col gap-4 justify-between p-4">
          <h2 className="text-lg">{recipe.title}</h2>
          <p>{recipe.description}</p>
          <div className="flex justify-between">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-500 text-white rounded-lg cursor-pointer hover:bg-gray-600 active:bg-gray-400"
            >
              Cancel
            </button>
            <div className="flex gap-4">
              <button
                onClick={() => setIsEditing(true)}
                className="px-6 py-2 bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600 active:bg-blue-400"
              >
                Edit
              </button>
              <button
                onClick={handleDetele}
                className="px-6 py-2 bg-red-500 text-white rounded-lg cursor-pointer hover:bg-red-600 active:bg-red-400"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
