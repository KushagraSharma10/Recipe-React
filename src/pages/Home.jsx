import axios from "axios";
import React from "react";

const Home = () => {
  const getProducts = async () => {
    try {
      const { data } = await axios.get("https://fakestoreapi.com/products/1");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <div>
      <h1>Home</h1>
      <button onClick={getProducts}>Get Products</button>
    </div>
  );
};

export default Home;
