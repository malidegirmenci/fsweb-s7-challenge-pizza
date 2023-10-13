import React from 'react'
import { Link } from "react-router-dom";

/* IMAGES */
import { Icons } from '../../data/Icons';

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
            <div className="home">
                <header>
                    <h1>Teknolojik Yemekler</h1>
                    <h3>fırsatı kaçırma</h3>
                    <h2>KOD ACIKTIRIR<br />PIZZA, DOYURUR</h2>
                    <button className='orderPage-button' onClick={goToFoodArea}>ACIKTIM</button>
                </header>
            </div>
            <nav id = "foodNav" className='nav-container'>
                <Link className="nav-link">
                    <img src={Icons.Ramen} alt='Kore Yemeği' /> YENİ! Kore
                </Link>
                <Link className="nav-link">
                    <img src={Icons.Pizza} alt='Pizza' /> Pizza
                </Link >
                <Link className="nav-link">
                    <img src={Icons.Burger} alt='Burger' /> Burger
                </Link >
                <Link className="nav-link">
                    <img src={Icons['French fries']} alt='Kızartmalar' /> Kızartmalar
                </Link>
                <Link className="nav-link">
                    <img src={Icons['Fast food']} alt='Fast food' /> Fast food
                </Link>
                <Link className="nav-link">
                    <img src={Icons['Soft drinks']} alt='Gazlı İçeçekler' />Gazlı İçecek
                </Link>
            </nav>
            <Main productData = {productData} selectedProduct={selectedProduct}/>
            <Footer/>
        </div>
    )
}