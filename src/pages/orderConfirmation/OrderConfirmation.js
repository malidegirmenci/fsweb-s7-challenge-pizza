import React from "react";

import './OrderConfirmation.css';

export default function OrderConfirmation(props){
    const {order} = props;
    console.log("confirmation",order);
    return (
        <div className="flex column order-confirmation-container">
                <h1>Teknolojik Yemekler</h1>
                <p>TEBRİKLER!<br/>SİPARİŞİNİZ ALINDI!</p>
        </div>
    )
}