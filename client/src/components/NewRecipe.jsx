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
    <div className="p-4 w-full">
      <h2 className="text-xl mb-4">Add New Recipe</h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <p className="flex flex-col gap-2">
          <label htmlFor="title" className="text-sm text-gray-700">
            Title:
          </label>
          <input
            type="text"
            id="title"
            onChange={handleTitleChange}
            className="text-gray-900 outline-1 -outline-offset-1 outline-gray-300 rounded-md bg-white px-3 py-1.5 "
          ></input>
        </p>
        <p className="flex flex-col gap-2">
          <label htmlFor="description" className="text-sm text-gray-700">
            Description:
          </label>
          <textarea
            id="description"
            onChange={handleDescriptionChange}
            className="text-gray-900 outline-1 -outline-offset-1 outline-gray-300 rounded-md bg-white px-3 py-1.5 "
          ></textarea>
        </p>
        <p className="flex flex-col gap-2">
          <label htmlFor="image" className="text-sm text-gray-700">
            Image URL:
          </label>
          <input
            type="text"
            id="image"
            onChange={handleImageChange}
            className="text-gray-900 outline-1 -outline-offset-1 outline-gray-300 rounded-md bg-white px-3 py-1.5 "
          ></input>
        </p>
        <div className="flex justify-end gap-4">
          <button
            onClick={onCancel}
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
    </div>
  );
}
