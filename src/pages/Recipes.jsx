import React, { useContext } from 'react'
import { recipeContext } from '../context/RecipeContext'

const Recipes = () => {

  const {data} = useContext(recipeContext);

  const renderRecipes = data.map((recipe => <div><h1>{recipe.title}</h1></div>))

  return <div>{renderRecipes}</div>
}

export default Recipes