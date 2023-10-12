import React from "react"
import './Product.css';
export default function Product(props) {
    const {productData} = props;
    return (
        <>
            <div className="product-name-area">
                <h2>{productData.title}</h2>
            </div>
            <div className="flex space-b price-rate-amount-area">
                <div className="price">
                    <p>{productData.price.toFixed(2)}₺</p>
                </div>
                <div className="flex rate-comment">
                    <p>{productData.rate}</p>
                    <p>({productData.comment})</p>
                </div>
            </div>
            <div className="description">
                <p>{productData.description}</p>
            </div>
        </>
    )
}