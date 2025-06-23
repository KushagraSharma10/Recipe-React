import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { recipeContext } from "../context/RecipeContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SingleRecipe = () => {
  const { data, setData } = useContext(recipeContext);
  const params = useParams();
  const recipe = data.find((recipe) => params.id === recipe.id);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: recipe?.title,
      chef: recipe?.chef,
      category: recipe?.Category,
      image: recipe?.image,
      desc: recipe?.desc,
    },
  });
  const navigate = useNavigate();

  const submitHandler = (recipe) => {
    const index = data.findIndex((recipe) => params.id === recipe.id);
    const copyData = [...data];
    copyData[index] = { ...copyData[index], ...recipe };
    setData(copyData);
    localStorage.setItem("recipes", JSON.stringify(copyData));
    toast.success("Recipe Updated!");
  };

  const deleteHandler = () => {
    const filteredData = data.filter((r) => r.id !== params.id);
    setData(filteredData);
    localStorage.setItem("recipes", JSON.stringify(filteredData));
    toast.success("recipe Deleted!");
    navigate("/recipes");
  };

  const favorite = JSON.parse(localStorage.getItem("fav")) || [];

  const favHandler = () => {
    favorite.push(recipe)
    localStorage.setItem("fav", JSON.stringify(favorite))
  };

  const unfavHandler = () => {};

  return recipe ? (
    <div className="flex gap-5">
      <div className="relative left w-1/2 p-10">
        {favorite.find(t=> t.id === recipe.id) ? (
          <i onClick={unfavHandler} className="absolute right-[10%] ri-heart-fill text-4xl text-red-500"></i>
        ) : (
          <i onClick={favHandler} className="absolute right-[10%] ri-heart-line text-4xl text-red-500"></i>
        )}

        <h1 className="text-5xl font-bold ">{recipe.title}</h1>
        <img
          src={recipe.image}
          alt=""
          className="w-full h-[30vh] object-cover"
        />
      </div>
      <form className="w-1/2" onSubmit={handleSubmit(submitHandler)}>
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
          {...register("Category")}
          className="block border-b outline-0 p-2 text-zinc-500"
        >
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="supper">Supper</option>
          <option value="dinner">Dinner</option>
        </select>

        <button className="block mt-5 px-4 py-2 bg-blue-500 rounded-md cursor-pointer w-1/2">
          Update Recipe
        </button>
        <button
          onClick={deleteHandler}
          className="block mt-5 px-4 py-2 bg-red-500 rounded-md cursor-pointer w-1/2"
        >
          Delete Recipe
        </button>
      </form>
    </div>
  ) : (
    "Loading..."
  );
};

export default SingleRecipe;
