import { useState } from "react";

export default function Recipe({ recipe, onClose, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleDetele = () => {
    onDelete(recipe.id);
    onClose();
  };

  return (
    <div>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="h-120 w-200 object-cover rounded-lg"
      />
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      {isEditing ? (
        <div>
          <button>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div>
          <button onClick={onClose}>Cancel</button>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={handleDetele}>Delete</button>
        </div>
      )}
    </div>
  );
}
