import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { recipeContext } from "../context/RecipeContext";

const SingleRecipe = () => {
  const { data } = useContext(recipeContext);
  const params = useParams();

  const recipe = data.find((recipe) => params.id === recipe.id);
  console.log(recipe);
  return recipe ? <div>SingleRecipe</div> : "Loading...";
};

export default SingleRecipe;
