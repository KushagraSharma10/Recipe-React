import { nanoid } from "nanoid";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipeContext } from "../context/RecipeContext";

const Create = () => {
  const { data, setData } = useContext(recipeContext);

  const { register, handleSubmit, reset } = useForm();

  const submitHandler = (recipe) => {
    recipe.id = nanoid();
    console.log(recipe);

    setData([...data, recipe]);

    reset();
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <input
        type="url"
        {...register("image")}
        className="block border-b outline-0 p-2"
        placeholder="Enter image url"
      />
      <small className="text-red-500">This is how error is shown</small>
      <input
        type="text"
        {...register("title")}
        className="block border-b outline-0 p-2"
        placeholder="Recipe Title"
      />

      <input
        type="text"
        {...register("Chef")}
        className="block border-b outline-0 p-2"
        placeholder="Chef Name"
      />

      <textarea
        type="text"
        {...register("description")}
        className="block border-b outline-0 p-2 resize-none"
        placeholder="Start from here"
      />

      <textarea
        type="text"
        {...register("ingredients")}
        className="block border-b outline-0 p-2 resize-none"
        placeholder="write ingredients seperated by comma"
      />

      <textarea
        type="text"
        {...register("instructions")}
        className="block border-b outline-0 p-2 resize-none"
        placeholder="write instructions seperated by comma"
      />

      <select
        {...register("Category")}
        className="block border-b outline-0 p-2"
      >
        <option value="cat-1">Category 1</option>
        <option value="cat-2">Category 2</option>
        <option value="cat-3">Category 3</option>
      </select>

      <button className="block mt-5 px-4 py-2 bg-zinc-900 rounded-md cursor-pointer">
        Save Recipe
      </button>
    </form>
  );
};

export default Create;
