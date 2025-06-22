import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = (props) => {
  const { id, image, title, desc, chef } = props.recipe;
  return (
    <Link
      to={`/recipes/details/${id}`}
      className="w-[23vw] overflow-hidden rounded-md shadow-lg block bg-zinc-800 mr-3 mb-3"
    >
      <img src={image} alt="" className="w-full h-[20vh] object-cover" />
      <h1 className="px-2 mt-2 font-bold">{title}</h1>
      <small className="px-2 text-red-400">{chef}</small>
      <p className="px-2 pb-3">
        {desc.slice(0, 100)}... <small className="text-blue-400">more</small>
      </p>
    </Link>
  );
};

export default RecipeCard;
