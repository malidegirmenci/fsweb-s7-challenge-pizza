import React, { useState } from "react";

import './OrderConfirmation.css';

export default function OrderConfirmation(props) {
    const { order } = props;
    console.log("confirmPAge",order)
    console.log("type:",typeof order["extraOptions"]);
    console.log("extraOptions",order["extraOptions"]);
    /*
    const fakeData = {
        title: "Position Absolute Acı Pizza",
        size: "Büyük",
        dough: "Kalın",
        extraOptions: ["Peperoni", "Sosis", "Mısır", "Ananas", "Jalepeno"],
        extraOptionsPrice: 123,
        totalPrice: 1231
    }
    console.log("fakeData type: ", typeof fakeData, "value", fakeData)
    */
    return (
        <div className="order-confirmation-container">
            <div className="flex column vw37 order-confirmation">
                <h1>Teknolojik Yemekler</h1>
                <h2 className="onTheWayMsg">Lezzetin yolda</h2>
                <h2 className="takenOrder">SİPARİŞ ALINDI!</h2>
                <hr className="vw37" />
                <div className="flex column order-summary">
                    <h3>{order.title}</h3>
                    <div className="pizza-info">
                        <p>Boyut: <b>{order.size}</b></p>
                        <p>Hamur: <b>{order.dough}</b></p>
                        <p>Ek Malzemeler: <b>{order.extraOptions && order.extraOptions.join(", ")}</b></p>
                    </div>
                    <div className="bill">
                        <h3>Sipariş Toplamı</h3>
                        <div className="price-area">
                            <div className="flex flex-center price-options">
                                <h4>Seçimler</h4>
                                <p>{order.extraOptionsPrice}₺</p>
                            </div>
                            <div className="flex flex-center price-total">
                            <h4>Toplam</h4>
                                <p>{order.totalPrice}₺</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer"></div>
            </div>
        </div>
    )
}