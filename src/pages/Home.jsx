import axios from "../utils/Axios";
import React, { useEffect } from "react";

const Home = () => {
  const getProducts = async () => {
    try {
      const { data } = await axios.get("/products");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <button onClick={getProducts}>Get Products</button>
    </div>
  );
};

export default Home;
