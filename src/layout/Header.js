import React from "react";
import './Header.css';
import { Link, useHistory } from "react-router-dom";
export default function Header(props) {
    const history = useHistory();
    const goToHome = () => {
        history.push("/");
    }
    return (
        <div className="center header-container ">
            <header>
                <h1 onClick={goToHome}>Teknolojik Yemekler</h1>
                <nav className="center vw37 navigation-links ">
                    <Link to="/">Anasayfa - </Link>
                    <Link to="/">Seçenekler - </Link>
                    <Link to="/order"><b>Sipariş Oluştur</b></Link>
                </nav>
            </header>
        </div>
    )
}