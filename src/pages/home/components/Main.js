import React from "react"

import img1 from '../../../Assets/adv-aseets/icons/1.svg'
import img2 from '../../../Assets/adv-aseets/icons/2.svg'
import img3 from '../../../Assets/adv-aseets/icons/3.svg'
import img4 from '../../../Assets/adv-aseets/icons/4.svg'
import img5 from '../../../Assets/adv-aseets/icons/5.svg'
import img6 from '../../../Assets/adv-aseets/icons/6.svg'

import ProductCard from "../../../components/ProductCard"

import './Main.css'
export default function Main(props) {
    const {handleOrder, productData} = props;
    return (
        <div className='main-content'>
            <div className='headline'>
                <div className='headline-area-1'>
                    <div className='popular-product'>
                        <h2>Özel <br />Lezzetus</h2>
                        <h3>Position:Absolute Acı Burger</h3>
                        <button className='order-button' onClick={handleOrder}>SİPARİŞ VER</button>
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
                        <img src={img1} alt='Ramen' /> Ramen
                    </button>
                    <button className="nav-button-container active">
                        <img src={img2} alt='Pizza' /> Pizza
                    </button>
                    <button className="nav-button-container">
                        <img src={img3} alt='Burger' /> Burger
                    </button>
                    <button className="nav-button-container">
                        <img src={img4} alt='French fries' /> French fries
                    </button>
                    <button className="nav-button-container">
                        <img src={img5} alt=',Fast food' /> Fast food
                    </button>
                    <button className="nav-button-container">
                        <img src={img6} alt='Soft drinks' /> Soft drinks
                    </button>
                </div>
                <div className='foods'>
                    {
                        productData.map((item, index) => {
                            return(
                                <ProductCard item={item} key={index} handleOrder={handleOrder}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}