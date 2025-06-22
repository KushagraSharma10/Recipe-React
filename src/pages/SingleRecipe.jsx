import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { recipeContext } from "../context/RecipeContext";

const SingleRecipe = () => {
  const { data } = useContext(recipeContext);
  const params = useParams();

  const recipe = data.find((recipe) => params.id === recipe.id);
  console.log(params)
  console.log(data)

  return recipe ? 
        <div className="flex">
            <div className="left w-1/2 p-2">
                <h1 className="text-5xl font-bold ">{recipe.title}</h1>
                <img src={recipe.image} alt="" className="w-full h-[30vh] object-cover" />
            </div>
            <div className="right"></div>
        </div>
   : "Loading...";
};

export default SingleRecipe;
