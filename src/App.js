import React from "react";
import OrderForm from "./pages/orderForm/OrderForm";
import { useState } from "react";
import Header from "./layout/Header";
const App = () => {
  
  const initialData = [
    {
      title: "Position Absolute Acı Pizza",
      price: 85.50,
      description: "Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizatta denir.",
      rate: "4.9",
      amount: 200,
    }
  ]

  const [data,setData] = useState(initialData[0])
  return (
    <>
      <Header></Header>
      <OrderForm data={data}>Test</OrderForm>
    </>
  );
};
export default App;
