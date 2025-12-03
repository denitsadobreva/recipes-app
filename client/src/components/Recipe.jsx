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
    <div>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="h-120 w-200 object-cover rounded-lg"
      />

      {isEditing ? (
        <form className="flex flex-col gap-4" onSubmit={handleUpdate}>
          <p className="flex flex-col gap-2">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={editedRecipe.title}
              onChange={handleChange}
            ></input>
          </p>
          <p className="flex flex-col gap-2">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={editedRecipe.description}
              onChange={handleChange}
            ></textarea>
          </p>
          <div className="flex">
            <button
              onClick={handleCancelEdit}
              type="button"
              className="px-4 py-2 bg-gray-500 text-white rounded-lg cursor-pointer mr-4"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-green-500 text-white rounded-lg cursor-pointer"
            >
              Save
            </button>
          </div>
        </form>
      ) : (
        <div>
          <h2>{recipe.title}</h2>
          <p>{recipe.description}</p>
          <div className="flex">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-500 text-white rounded-lg cursor-pointer mr-4"
            >
              Cancel
            </button>
            <button
              onClick={() => setIsEditing(true)}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg cursor-pointer"
            >
              Edit
            </button>
            <button
              onClick={handleDetele}
              className="px-6 py-2 bg-red-500 text-white rounded-lg cursor-pointer"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
