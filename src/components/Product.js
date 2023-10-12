import React from "react"
import './Product.css';
export default function Product(props) {
    const {dataProduct} = props;
    return (
        <>
            <div className="product-name-area">
                <h2>{dataProduct.title}</h2>
            </div>
            <div className="flex space-b price-rate-amount-area">
                <div className="price">
                    <p>{dataProduct.price.toFixed(2)}₺</p>
                </div>
                <div className="flex rate-comment">
                    <p>{dataProduct.rate}</p>
                    <p>({dataProduct.comment})</p>
                </div>
            </div>
            <div className="description">
                <p>{dataProduct.description}</p>
            </div>
        </>
    )
}