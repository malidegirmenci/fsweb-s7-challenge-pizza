import React from 'react'
import { Link } from "react-router-dom";

import { Images } from '../../data/Images';

import Footer from '../../layout/Footer';
import Main from './components/Main';

import './Home.css'


export default function Home(props) {
    const {productData, selectedProduct} = props;

    const goToFoodArea = () => {
        const goToFoodNav = document.getElementById("foodNav");
        goToFoodNav.scrollIntoView({behavior:"smooth"})
    }
    return (
        <div className='container'>
            <div className="text-align-center bg-color-red color-white home">
                <header>
                    <h1 className='font-Londrina'>Teknolojik Yemekler</h1>
                    <h3 className='font-Satisfy color-yellow'>fırsatı kaçırma</h3>
                    <h2 className='font-Barlow'>KOD ACIKTIRIR<br />PIZZA, DOYURUR</h2>
                    <button className='font-Barlow bg-color-yellow orderPage-button' onClick={goToFoodArea}>ACIKTIM</button>
                </header>
            </div>
            <nav id = "foodNav" className='flex align-items-center gap-5 nav-container'>
                <Link className="flex justify-content-center align-items-center gap-1 ">
                    <img src={Images.icons.Ramen} alt='Kore Yemeği' /> YENİ! Kore
                </Link>
                <Link className="flex justify-content-center align-items-center gap-1">
                    <img src={Images.icons.Pizza} alt='Pizza' /> Pizza
                </Link >
                <Link className="flex justify-content-center align-items-center gap-1">
                    <img src={Images.icons.Burger} alt='Burger' /> Burger
                </Link >
                <Link className="flex justify-content-center align-items-center gap-1">
                    <img src={Images.icons['French fries']} alt='Kızartmalar' /> Kızartmalar
                </Link>
                <Link className="flex justify-content-center align-items-center gap-1">
                    <img src={Images.icons['Fast food']} alt='Fast food' /> Fast food
                </Link>
                <Link className="flex justify-content-center align-items-center gap-1">
                    <img src={Images.icons['Soft drinks']} alt='Gazlı İçeçekler' />Gazlı İçecek
                </Link>
            </nav>
            <Main productData = {productData} selectedProduct={selectedProduct}/>
            <Footer/>
        </div>
    )
}