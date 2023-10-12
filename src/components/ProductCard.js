import React from "react"

export default function ProductCard(props) {
    const {item, handleOrder} = props
    return (
        <div className='food' onClick={handleOrder}>
            <img src={item.image} alt='' />
            <h4>{item.title}</h4>
            <div className='food-footer'>
                <p>{item.rate}</p>
                <p>({item.comment})</p>
                <p><span>{item.price.toFixed(2)}₺</span></p>
            </div>
        </div>
    )
}