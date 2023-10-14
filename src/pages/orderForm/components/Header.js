import React from "react";
import { Link, useHistory } from "react-router-dom";

import { Images } from "../../../data/Images";
import Product from "../../../components/Product";

import './Header.css';

export default function Header(props) {
    
    const history = useHistory();
    const { productData } = props;

    const goToHome = () => {
        history.push("/");
    }
    return (
        <div className="flex column justify-content-center align-items-center bg-color-beige ">
            <header className="bg-color-red">
                <h1 className="cursor-pointer color-white text-align-center" onClick={goToHome}>Teknolojik Yemekler</h1>
            </header>
            <div className="vw37 product-nav-area">
                <img src={Images["Order Form Banner"]} alt="adv-banner" />
                <nav className="navigation-links">
                    <Link to="/">Anasayfa - </Link>
                    <Link to="/">Seçenekler - </Link>
                    <Link to="/order"><span><b>Sipariş Oluştur</b></span></Link>
                </nav>
                <Product productData={productData} />
            </div>
        </div>
    )
}