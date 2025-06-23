import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { recipeContext } from "../context/RecipeContext";
import { useForm } from "react-hook-form";

const SingleRecipe = () => {
  const { data } = useContext(recipeContext);
  const params = useParams();

  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();


  const submitHandler = (recipe) =>{
    const index = data.findIndex((recipe) => params.id === recipe.id);
    console.log(index)
  }

  const recipe = data.find((recipe) => params.id === recipe.id);
//   console.log(params);
//   console.log(data);

  return recipe ? (
    <div className="flex gap-5">
      <div className="left w-1/2 p-2">
        <h1 className="text-5xl font-bold ">{recipe.title}</h1>
        <img
          src={recipe.image}
          alt=""
          className="w-full h-[30vh] object-cover"
        />
      </div>
      <form className="w-1/2">
        <input
          type="url"
          {...register("image")}
          value={recipe.image}
          className="block border-b outline-0 p-2"
          placeholder="Enter image url"
        />
        <small className="text-red-500">This is how error is shown</small>
        <input
          type="text"
          {...register("title")}
          value={recipe.title}
          className="block border-b outline-0 p-2"
          placeholder="Recipe Title"
        />

        <input
          type="text"
          {...register("chef")}
          value={recipe.chef}
          className="block border-b outline-0 p-2"
          placeholder="Chef Name"
        />

        <textarea
          type="text"
          {...register("desc")}
          value={recipe.desc}
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
          {...register("Category")}
          className="block border-b outline-0 p-2 text-zinc-500"
          value={recipe.Category}
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
    </div>
  ) : (
    "Loading..."
  );
};

export default SingleRecipe;
