import React from "react"
import './Product.css';
export default function Product(props) {
    const {data} = props;
    return (
        <>
            <div className="product-name-area">
                <h2>{data.title}</h2>
            </div>
            <div className="flex space-b price-rate-amount-area">
                <div className="price">
                    <p>{data.price}₺</p>
                </div>
                <div className="flex opacity rate-amount">
                    <p>{data.rate}</p>
                    <p>({data.amount})</p>
                </div>
            </div>
            <div className="opacity description">
                <p>{data.description}</p>
            </div>
        </>
    )
}