import React from "react";
import './Header.css';
import { Link } from "react-router-dom";
export default function Header(props) {
    return (
        <div className="center header-container ">
            <header>
                <h1>Teknolojik Yemekler</h1>
                <nav className="center vw37 navigation-links ">
                    <Link to="/">Anasayfa - </Link>
                    <Link to="/">Seçenekler - </Link>
                    <Link to="/order"><b>Sipariş Oluştur</b></Link>
                </nav>
            </header>
        </div>
    )
}