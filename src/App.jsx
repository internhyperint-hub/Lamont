import "./App.css";
import React from "react";
import ProductPage from "./Component/ProductPage";
import Reviews from "./Component/Reviews";
import Breakdown from "./Component/Breakdown";

function App() {
  return (
    <>
      <ProductPage />
      <Breakdown />
      <Reviews />
    </>
  );
}

export default App;
