import React from 'react'
import { useHistory, Link } from "react-router-dom";

/* IMAGES */
import img1 from '../../Assets/adv-aseets/icons/1.svg'
import img2 from '../../Assets/adv-aseets/icons/2.svg'
import img3 from '../../Assets/adv-aseets/icons/3.svg'
import img4 from '../../Assets/adv-aseets/icons/4.svg'
import img5 from '../../Assets/adv-aseets/icons/5.svg'
import img6 from '../../Assets/adv-aseets/icons/6.svg'


import Footer from '../../layout/Footer';
import Main from '../../layout/Main';

import './Home.css'

export default function Home() {
    let history = useHistory();
    const handleClick = () => {
        history.push("/order");
    }
    return (
        <div className='container'>
            <div className="home">
                <header>
                    <h1>Teknolojik Yemekler</h1>
                    <h3>fırsatı kaçırma</h3>
                    <h2>KOD ACIKTIRIR<br />PIZZA, DOYURUR</h2>
                    <button className='orderPage-button' onClick={handleClick}>ACIKTIM</button>
                </header>
            </div>
            <nav className='nav-container'>
                <Link className="nav-link">
                    <img src={img1} alt='Kore Yemeği' /> YENİ! Kore
                </Link>
                <Link className="nav-link">
                    <img src={img2} alt='Pizza' /> Pizza
                </Link >
                <Link className="nav-link">
                    <img src={img3} alt='Burger' /> Burger
                </Link >
                <Link className="nav-link">
                    <img src={img4} alt='Kızartmalar' /> Kızartmalar
                </Link>
                <Link className="nav-link">
                    <img src={img5} alt='Fast food' /> Fast food
                </Link>
                <Link className="nav-link">
                    <img src={img6} alt='Gazlı İçeçekler' />Gazlı İçecek
                </Link>
            </nav>
            <Main/>
            <Footer/>
        </div>
    )
}