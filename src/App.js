import React, { useState } from "react";


import OrderForm from "./pages/orderForm/OrderForm";
import Header from "./layout/Header";

import {productData} from "./data/ProductData";

const App = () => {
  
  const [product,setProduct] = useState(productData[0])
  console.log(product);
  return (
    <>
      <Header></Header>
      <OrderForm dataProduct={product}>Test</OrderForm>
    </>
  );
};
export default App;
