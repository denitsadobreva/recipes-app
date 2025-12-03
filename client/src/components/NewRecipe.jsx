import { useState } from "react";

export default function NewRecipe({ onSave, onCancel }) {
  const [enteredTitle, setTitle] = useState("");
  const [enteredDescription, setDescription] = useState("");
  const [enteredImage, setImage] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      title: enteredTitle,
      description: enteredDescription,
      image: enteredImage,
    };
    onSave(newRecipe);
    onCancel();
  };

  return (
    <div className="p-4 w-md">
      <h2>Add New Recipe</h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <p className="flex flex-col gap-2">
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" onChange={handleTitleChange}></input>
        </p>
        <p className="flex flex-col gap-2">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            onChange={handleDescriptionChange}
          ></textarea>
        </p>
        <p className="flex flex-col gap-2">
          <label htmlFor="image">Image URL:</label>
          <input type="text" id="image" onChange={handleImageChange}></input>
        </p>
        <div className="flex">
          <button
            onClick={onCancel}
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
    </div>
  );
}
