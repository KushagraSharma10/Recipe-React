import React, { createContext, useEffect, useState } from "react";

export const recipeContext = createContext(null);

const RecipeContext = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("recipes")) || []);
  }, []);

  return (
    <recipeContext.Provider value={{ data, setData }}>
      {props.children}
    </recipeContext.Provider>
  );
};

export default RecipeContext;

// {
//   id: 1,
//   title: "Classic Margherita Pizza",
//   image: "https://cdn.dummyjson.com/recipe-images/1.webp",
//   category: "Dinner",
//   desc: "Roll out the pizza dough and spread tomato sauce evenly. Top with slices of fresh mozzarella and fresh basil leaves. Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
//   ingr:"asdaddddddddddddddddd",
//   inst : "aksdhasdhaskdlasjdlasdjladsjl",
//   chef: "aksdjnsakd"
// },
