import React from "react";
import './Header.css';
export default function Header(props) {
    return (
        <div className="center header-container ">
            <header>
                <h1>Teknolojik Yemekler</h1>
                <nav className="center vw37 navigation-links ">
                    <a href="/">Anasayfa - </a>
                    <a href="/option">Seçenekler - </a>
                    <a href="/order"><b>Sipariş Oluştur</b></a>
                </nav>
            </header>
        </div>
    )
}