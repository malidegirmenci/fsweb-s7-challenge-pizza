import React from "react";
import "./OrderForm.css";
import Product from "./components/Product";
export default function OrderForm(props) {
    const {data} = props;
    return (
        <div className="order-form-container ">
            <div className="flex  column vw37 order-form">
                <Product data={data}/>
                <form className="flex column gap-2">
                    <div className="flex row psize-pdough-area">
                        <div className="flex column gap-1">
                            <h3>Boyut Seç<span>*</span></h3>
                            <label>
                                <input type="radio" value="small" name="psize" /> Küçük
                            </label>
                            <label>
                                <input type="radio" value="mid" name="psize" /> Orta
                            </label>
                            <label>
                                <input type="radio" value="big" name="psize" /> Büyük
                            </label>
                        </div>
                        <div className="flex column gap-1 right-margin">
                            <h3>Hamur Seç<span>*</span></h3>
                            <div className="pdough">
                                <select>
                                    <option>Hamur Kalınlığı</option>
                                    <option>İnce</option>
                                    <option>Orta</option>
                                    <option>Kalın</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="flex column">
                        <h3>Ek Malzemeler</h3>
                        <p>En fazla 10 malzeme seçebilirsiniz. Adet: 5₺</p>
                        <div className="flex extra-options">
                            <div className="flex column gap-1">
                                <label>
                                    <input type="checkbox" /> Peperoni
                                </label>
                                <label>
                                    <input type="checkbox" /> Sosis
                                </label>
                                <label>
                                    <input type="checkbox" /> Kanada Jambonu
                                </label>
                                <label>
                                    <input type="checkbox" /> Tavuk Izgara
                                </label>
                                <label>
                                    <input type="checkbox" /> Soğan
                                </label>
                            </div>
                            <div className="flex column gap-1">
                                <label>
                                    <input type="checkbox" /> Domates
                                </label>
                                <label>
                                    <input type="checkbox" /> Mısır
                                </label>
                                <label>
                                    <input type="checkbox" /> Sucuk
                                </label>
                                <label>
                                    <input type="checkbox" /> Jalepeno
                                </label>
                                <label>
                                    <input type="checkbox" /> Sarımsak
                                </label>
                            </div>
                            <div className="flex column gap-1">
                                <label>
                                    <input type="checkbox" /> Biber
                                </label>
                                <label>
                                    <input type="checkbox" /> Sucuk
                                </label>
                                <label>
                                    <input type="checkbox" /> Ananas
                                </label>
                                <label>
                                    <input type="checkbox" /> Kabak
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="flex column order-note">
                        <h3>Sipariş Notu</h3>
                        <label>
                            <input type="text" placeholder="Siparişine eklemek istediğin bir not var mı?"></input>
                        </label>
                    </div>
                    <hr></hr>
                    <div className="flex row gap-2 ">
                        <div className="flex row order-amount">
                            <button className=" yellow-bg decrease">-</button>
                            <button className="amount">1</button>
                            <button className=" yellow-bg increase">+</button>
                        </div>
                        <div className="flex column order-submit-area">
                            <div className="flex column order-summary-area">
                                <h3>Sipariş Toplamı</h3>
                                <div className="flex row flex-center">
                                    <h4>Seçimler</h4>
                                    <p>25.00₺</p>
                                </div>
                                <div className="flex row flex-center total-price">
                                    <h4>Toplam</h4>
                                    <p>110.50₺</p>
                                </div>
                            </div>
                            <div>
                                <button className="yellow-bg order-button">SİPARİŞ VER</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className="footer">
            </div>
        </div>
    )
}