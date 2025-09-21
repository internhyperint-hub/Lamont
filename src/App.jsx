import "./App.css";
import React from "react";
import ProductPage from "./Component/ProductPage";
import Reviews from "./Component/Reviews";
import ImagePop from "./Component/ImagePop";
import Breakdown
 from "./Component/Breakdown";

function App() {
  return (
    <>
      <ProductPage />
      <Breakdown />
      <ImagePop />
      <Reviews />
    </>
  );
}

export default App;
