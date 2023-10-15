import React, { useEffect } from "react";
import { useHistory } from "react-router-dom"
import { RiseLoader } from "react-spinners"
import './OrderConfirmation.css';

export default function OrderConfirmation(props) {
    const { order } = props;
    const history = useHistory();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    const goToHome = () => {
        history.push("/");
    }
    if (!order) return
    return (
        <div className="bg-color-red color-white order-confirmation-container">
            <div className="flex column vw37 margin-0-auto align-items-center">
                <h1 data-cy = "h1" className="cursor-pointer font-Londrina" onClick={goToHome}>Teknolojik Yemekler</h1>
                <h2 className="font-Satisfy color-yellow onTheWayMsg">Lezzetin yolda</h2>
                <h2 className="font-Barlow takenOrder">SİPARİŞ ALINDI!</h2>
                <hr className="vw37 color-white" />
                {
                    !order ? <RiseLoader color="white"></RiseLoader> :
                        <div className="flex column order-summary">
                            <h3>{order.title}</h3>
                            <div className="pizza-info ">
                                <p data-cy="size-ordered">Boyut: <b>{order.size}</b></p>
                                <p data-cy="dough-ordered">Hamur: <b>{order.dough}</b></p>
                                <p data-cy="extraOptions-ordered">Ek Malzemeler: <b>{order.extraOptions && order.extraOptions.join(", ")}</b></p>
                            </div>
                            <div className="text-align-center bill">
                                <h3 className="text-align-center">Sipariş Toplamı</h3>
                                <div className="price-area ">
                                    <div className="flex text-align-center justify-content-space-b price-options">
                                        <h4>Seçimler</h4>
                                        <p data-cy="extraOptions-price">{order.extraOptionsPrice}₺</p>
                                    </div>
                                    <div className="flex  text-align-center justify-content-space-b price-total">
                                        <h4>Toplam</h4>
                                        <p data-cy="total-price">{order.totalPrice}₺</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                }
            </div>
        </div>
    )
}