import React from 'react'
import { useHistory } from "react-router-dom";
import './Home.css'



export default function Home() {
    let history = useHistory();
    const handleClick = () => {
        history.push("/order");
    }
    return (
        <div className="home">
            <h1>Teknolojik Yemekler</h1>
            <h2>KOD ACIKTIRIR<br />PIZZA, DOYURUR</h2>
            <button className='yellow-bg orderPage-button' onClick={handleClick}>ACIKTIM</button>
        </div>
    )
}