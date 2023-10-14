import React from "react"

import './Product.css';

export default function Product(props) {
    const {productData} = props;
    return (
        <>
            <div className="product-name-area">
                <h2>{productData.title}</h2>
            </div>
            <div className="flex justify-content-space-b align-items-center">
                <div className="price">
                    <p>{productData.price.toFixed(2)}₺</p>
                </div>
                <div className="flex gap-5">
                    <p className="color-light-gray">{productData.rate}</p>
                    <p className="color-light-gray">({productData.comment})</p>
                </div>
            </div>
            <div className="description">
                <p>{productData.description}</p>
            </div>
        </>
    )
}