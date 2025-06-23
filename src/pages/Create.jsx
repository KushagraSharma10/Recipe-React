import { nanoid } from "nanoid";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipeContext } from "../context/RecipeContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const { data, setData } = useContext(recipeContext);
  const { register, handleSubmit, reset } = useForm();

  const navigate = useNavigate();


  const submitHandler = (recipe) => {
    recipe.id = nanoid();
    console.log(recipe);

    const copyData = [...data];
    copyData.push(recipe)
    setData(copyData)
    localStorage.setItem("recipes", JSON.stringify(copyData))
    toast.success("New Recipe Created!")
    navigate("/recipes")
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
        {...register("chef")}
        className="block border-b outline-0 p-2"
        placeholder="Chef Name"
      />

      <textarea
        type="text"
        {...register("desc")}
        className="block border-b outline-0 p-2 resize-none"
        placeholder="Start from here"
      />

      <textarea
        type="text"
        {...register("ingr")}
        className="block border-b outline-0 p-2 resize-none"
        placeholder="write ingredients seperated by comma"
      />

      <textarea
        type="text"
        {...register("inst")}
        className="block border-b outline-0 p-2 resize-none"
        placeholder="write instructions seperated by comma"
      />

      <select
        {...register("category")}
        className="block border-b outline-0 p-2 text-zinc-500"
      >
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="supper">Supper</option>
        <option value="dinner">Dinner</option>
      </select>

      <button className="block mt-5 px-4 py-2 bg-zinc-900 rounded-md cursor-pointer">
        Save Recipe
      </button>
    </form>
  );
};

export default Create;
