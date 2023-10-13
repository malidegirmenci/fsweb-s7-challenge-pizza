import React from "react"

import { Icons } from "../../../data/Icons";

import ProductCard from "../../../components/ProductCard"

import './Main.css'
export default function Main(props) {
    const { productData, selectedProduct} = props;
    console.log("Main",productData)
    return (
        <div className='main-content'>
            <div className='headline'>
                <div className='headline-area-1'>
                    <div className='popular-product'>
                        <h2>Özel <br />Lezzetus</h2>
                        <h3>Position:Absolute Acı Burger</h3>
                        <button className='order-button' onClick={() => selectedProduct(productData[1])}>SİPARİŞ VER</button>
                    </div>
                </div>
                <div className='headline-area-2'>
                    <div className='popular-menu'>
                        <h3>Hackathlon<br />Burger Menu</h3>
                        <button className='order-button'>SİPARİŞ VER</button>
                    </div>
                    <div className='carrier-commercial'>
                        <h3><span>Çoooook</span> hızlı<br />npm gibi kurye</h3>
                        <button className='order-button'>SİPARİŞ VER</button>
                    </div>
                </div>
            </div>
            <div className='popular-foods-area'>
                <div>
                    <h3><span>en çok paketlenen menüler</span></h3>
                    <h3>Acıktıran Kodlara Doyuran Lezzetler</h3>
                </div>
                <div className='popular-foods-nav'>
                    <button className="nav-button-container">
                        <img src={Icons.Ramen} alt='Ramen' /> Ramen
                    </button>
                    <button className="nav-button-container active">
                        <img src={Icons.Pizza} alt='Pizza' /> Pizza
                    </button>
                    <button className="nav-button-container">
                        <img src={Icons.Burger} alt='Burger' /> Burger
                    </button>
                    <button className="nav-button-container">
                        <img src={Icons["French fries"]} alt='French fries' /> French fries
                    </button>
                    <button className="nav-button-container">
                        <img src={Icons["Fast food"]} alt='Fast food' /> Fast food
                    </button>
                    <button className="nav-button-container">
                        <img src={Icons["Soft drinks"]} alt='Soft drinks' /> Soft drinks
                    </button>
                </div>
                <div className='foods'>
                    {
                        productData.map((item, index) => {
                            return(
                                <ProductCard item={item} key={index} selectedProduct={selectedProduct} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}