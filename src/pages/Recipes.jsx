import React, { useContext, useEffect } from "react";
import { recipeContext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";

const Recipes = () => {
  const { data } = useContext(recipeContext);

  useEffect(() => {
    console.log("Recipes.jsx is mounted!");

    return () => {
      console.log("Recipes.jsx is unmounted!");
    };
  }, []);

  const renderRecipes = data.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe} />
  ));

  return (
    <div className="flex flex-wrap">
      {data.length > 0 ? renderRecipes : "No Recipe Found!"}
    </div>
  );
};

export default Recipes;
