import React, { useState } from "react";
import { Route, Switch } from 'react-router-dom';

import OrderForm from "./pages/orderForm/OrderForm";

import Home from "./pages/home/Home";
import OrderConfirmation from "./pages/orderConfirmation/OrderConfirmation";

import { productData } from "./data/ProductData";
import { useEffect } from "react";

const App = () => {
  const [order, setOrder] = useState({});

  const handleOrder = (order) => {
    setOrder(order);
  }

  useEffect(() => {
    console.log("app", order);
  }, [order])

  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Home productData = {productData}/>
        </Route>
        <Route exact path="/order">
          <OrderForm productData={productData[0]} handleOrder={handleOrder} />
        </Route>
        <Route exact path="/order/confirmedOrder">
          <OrderConfirmation order={order} />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
