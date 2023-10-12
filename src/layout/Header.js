import React from "react";
import { Link, useHistory } from "react-router-dom";

import Product from "../components/Product";
import './Header.css';

import img1 from '../Assets/adv-aseets/adv-form-banner.png';

export default function Header(props) {
    
    const history = useHistory();
    const { dataProduct } = props;

    const goToHome = () => {
        history.push("/");
    }
    return (
        <div className="header-area">
            <header>
                <h1 onClick={goToHome}>Teknolojik Yemekler</h1>
            </header>
            <div className="vw37 product-nav-area">
                <img src={img1} alt="adv-banner" />
                <nav className="navigation-links">
                    <Link to="/">Anasayfa - </Link>
                    <Link to="/">Seçenekler - </Link>
                    <Link to="/order"><span><b>Sipariş Oluştur</b></span></Link>
                </nav>
                <Product dataProduct={dataProduct} />
            </div>
        </div>
    )
}