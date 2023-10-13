import React, { useState } from "react";
import { Route, Switch } from 'react-router-dom';

import OrderForm from "./pages/orderForm/OrderForm";

import Home from "./pages/home/Home";
import OrderConfirmation from "./pages/orderConfirmation/OrderConfirmation";
import {useHistory} from "react-router-dom"
import { productData } from "./data/ProductData";
import { useEffect } from "react";

const App = () => {
  const [order, setOrder] = useState({});
  const [product, setProduct] = useState({});
  const history = useHistory();
  const selectedProduct = (product) => {
    setProduct(product)
    history.push("/order")
  }
  const handleOrder = (order) => {
    setOrder(order);
  }

  useEffect(() => {
    console.log("app", order);
    console.log("selectedProduct", product)
  }, [order, product])

  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Home productData = {productData} selectedProduct = {selectedProduct}/>
        </Route>
        <Route exact path="/order">
          <OrderForm productData={product} handleOrder={handleOrder} />
        </Route>
        <Route exact path="/order/confirmedOrder">
          <OrderConfirmation order={order} />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
