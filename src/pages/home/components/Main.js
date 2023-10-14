import React from "react"

import { Images } from "../../../data/Images";

import ProductCard from "../../../components/ProductCard"

import './Main.css'
export default function Main(props) {
    const { productData, selectedProduct} = props;
    console.log("Main",productData)
    return (
        <div className='margin-0-auto flex column justify-content-center align-items-center gap-5 bg-color-beige main-content'>
            <div className=' flex gap-2 font-Quattrocento headline'>
                <div className='flex column gap-2 flex-grow-1'>
                    <div className='flex column gap-1 flex-grow-1 color-white align-items-flex-start justify-content-flex-start popular-product'>
                        <h2>Özel <br />Lezzetus</h2>
                        <h3>Position:Absolute Acı Burger</h3>
                        <button className='color-red bg-color-white font-Barlow order-button' onClick={() => selectedProduct(productData[1])}>SİPARİŞ VER</button>
                    </div>
                </div>
                <div className='flex column gap-2 flex-grow-1'>
                    <div className='flex column gap-1 justify-content-center flex-grow-1 align-items-flex-start popular-menu'>
                        <h3>Hackathlon<br />Burger Menu</h3>
                        <button className='color-red bg-color-white font-Barlow order-button'>SİPARİŞ VER</button>
                    </div>
                    <div className='flex column gap-1 justify-content-center flex-grow-1 align-items-flex-start carrier-commercial'>
                        <h3><span className="color-red">Çoooook</span> hızlı<br />npm gibi kurye</h3>
                        <button className='color-red bg-color-white font-Barlow order-button'>SİPARİŞ VER</button>
                    </div>
                </div>
            </div>
            <div className='flex column justify-content-center align-items-center gap-2'>
                <div>
                    <h3><span className="font-Satisfy color-red margin-0-auto">en çok paketlenen menüler</span></h3>
                    <h3 className="text-align-center font-Barlow">Acıktıran Kodlara Doyuran Lezzetler</h3>
                </div>
                <div className='flex justify-content-space-e gap-1'>
                    <button className="flex justify-content-center align-items-center gap-1 bg-color-white font-Barlow color-dark-gray nav-button-container">
                        <img src={Images.icons.Ramen} alt='Ramen' /> Ramen
                    </button>
                    <button className="flex justify-content-center align-items-center gap-1 bg-color-white font-Barlow color-dark-gray nav-button-container active">
                        <img src={Images.icons.Pizza} alt='Pizza' /> Pizza
                    </button>
                    <button className="flex justify-content-center align-items-center gap-1 bg-color-white font-Barlow color-dark-gray nav-button-container">
                        <img src={Images.icons.Burger} alt='Burger' /> Burger
                    </button>
                    <button className="flex justify-content-center align-items-center gap-1 bg-color-white font-Barlow color-dark-gray nav-button-container">
                        <img src={Images.icons["French fries"]} alt='French fries' /> French fries
                    </button>
                    <button className="flex justify-content-center align-items-center gap-1 bg-color-white font-Barlow color-dark-gray nav-button-container">
                        <img src={Images.icons["Fast food"]} alt='Fast food' /> Fast food
                    </button>
                    <button className="flex justify-content-center align-items-center gap-1 bg-color-white font-Barlow color-dark-gray nav-button-container">
                        <img src={Images.icons["Soft drinks"]} alt='Soft drinks' /> Soft drinks
                    </button>
                </div>
                <div className='flex gap-5'>
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