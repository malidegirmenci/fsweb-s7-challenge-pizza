import React from "react"

export default function ProductCard(props) {
    const {item} = props
    return (

        <div className='food'>
            <img src={item.image} alt='' />
            <h4>{item.title}</h4>
            <div className='food-footer'>
                <p>{item.rate}</p>
                <p>({item.comment})</p>
                <p><span>{item.price}₺</span></p>
            </div>
        </div>
    )
}