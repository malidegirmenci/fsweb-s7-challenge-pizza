import React from "react";
import "./OrderForm.css";
import Product from "./components/Product";
import { useState } from "react";
import { useEffect } from "react";
/* TODO LİST
    [ ] Checkboxları componente çevir
*/
export default function OrderForm(props) {
    const [extraOptions, setExtraOptions] = useState([]);

    const [counterAmount, setCounterAmount] = useState(1);
    const [extraOptionsPrice, setExtraOptionsPrice] = useState(0);

    const optionPrice = 5;

    const [initialData, setInitialData] = useState({
        title: "",
        price: 0,
        description: "",
        rate: "",
        amount: "",
        size: "",
        dough: "",
        extraOptions: extraOptions,
        orderNote: "",
    })
    const { dataProduct } = props;

    const [formData, setFormData] = useState(initialData);

    const handleCheckboxChange = (e) => {
        const option = e.target.value;
        if (extraOptions.includes(option)) {
            setExtraOptions(extraOptions.filter((item) => item !== e.target.value));

        } else {
            setExtraOptions([...extraOptions, option])
        }
    }
    const handleDecrease = () => {
        if (counterAmount > 1) {
            setCounterAmount(counterAmount - 1)
        }
    }
    const handleIncrease = () => {
        setCounterAmount(counterAmount + 1);
    }
    console.log("counter", counterAmount)
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const newFormData = {
            ...formData,
            title: dataProduct.title,
            price: dataProduct.price,
            rate: dataProduct.rate,
            amount: dataProduct.amount,
            description: dataProduct.description,
            [name]: value
        };
        setFormData(newFormData);
    }

    useEffect(() => {
        //console.log("formData", formData);
        //console.log("extra", extraOptions);
        setFormData.extraOptions = extraOptions;
        setExtraOptionsPrice(extraOptions.length * optionPrice);
    }, [formData, extraOptions])

    return (
        <div className="order-form-container ">
            <div className="flex  column vw37 order-form">
                <Product dataProduct={dataProduct} />
                <form className="flex column gap-2">
                    <div className="flex row psize-pdough-area">
                        <div className="flex column gap-1">
                            <h3>Boyut Seç<span>*</span></h3>
                            <label htmlFor="smallPizzaSize">
                                <input id="small" type="radio" value="small" checked={formData.size === "small"} name="size" onChange={handleChange} /> Küçük
                            </label>
                            <label htmlFor="midPizzaSize">
                                <input id="mid" type="radio" value="mid" checked={formData.size === "mid"} name="size" onChange={handleChange} /> Orta
                            </label>
                            <label htmlFor="bigPizzaSize">
                                <input id="big" type="radio" value="big" checked={formData.size === "big"} name="size" onChange={handleChange} /> Büyük
                            </label>
                        </div>
                        <div className="flex column gap-1 right-margin">
                            <h3>Hamur Seç<span>*</span></h3>
                            <div className="pdough">
                                <select id="doughs" name="doughs" defaultValue="doughThickness" onChange={handleChange}>
                                    <option value="doughThickness" selected> Hamur Kalınlığı</option>
                                    <option selected={formData.dough === "thin"} value="thin" > İnce</option>
                                    <option selected={formData.dough === "mid"} value="mid"> Orta</option>
                                    <option selected={formData.dough === "thick"} value="thick"> Kalın</option>
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
                                    <input type="checkbox" value="Peperoni" onChange={handleCheckboxChange} /> Peperoni
                                </label>
                                <label>
                                    <input type="checkbox" value="Sosis" onChange={handleCheckboxChange} /> Sosis
                                </label>
                                <label>
                                    <input type="checkbox" value="Kanada Jambonu" onChange={handleCheckboxChange} /> Kanada Jambonu
                                </label>
                                <label>
                                    <input type="checkbox" value="Tavuk Izgara" onChange={handleCheckboxChange} /> Tavuk Izgara
                                </label>
                                <label>
                                    <input type="checkbox" value="Soğan" onChange={handleCheckboxChange} /> Soğan
                                </label>
                            </div>
                            <div className="flex column gap-1">
                                <label>
                                    <input type="checkbox" value="Domates" onChange={handleCheckboxChange} /> Domates
                                </label>
                                <label>
                                    <input type="checkbox" value="Mısır" onChange={handleCheckboxChange} /> Mısır
                                </label>
                                <label>
                                    <input type="checkbox" value="Sucuk" onChange={handleCheckboxChange} /> Sucuk
                                </label>
                                <label>
                                    <input type="checkbox" value="Jalepeno" onChange={handleCheckboxChange} /> Jalepeno
                                </label>
                                <label>
                                    <input type="checkbox" value="Sarımsak" onChange={handleCheckboxChange} /> Sarımsak
                                </label>
                            </div>
                            <div className="flex column gap-1">
                                <label>
                                    <input type="checkbox" value="Biber" onChange={handleCheckboxChange} /> Biber
                                </label>
                                <label>
                                    <input type="checkbox" value="Sucuk" onChange={handleCheckboxChange} /> Sucuk
                                </label>
                                <label>
                                    <input type="checkbox" value="Ananas" onChange={handleCheckboxChange} /> Ananas
                                </label>
                                <label>
                                    <input type="checkbox" value="Kabak" onChange={handleCheckboxChange} /> Kabak
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="flex column order-note">
                        <h3>Sipariş Notu</h3>
                        <label>
                            <input type="text" placeholder="Siparişine eklemek istediğin bir not var mı?" name="orderNote" onChange={handleChange}></input>
                        </label>
                    </div>
                    <hr></hr>
                    <div className="flex row gap-2 ">
                        <div className="flex row order-amount">
                            <button className=" yellow-bg decrease" type="button" onClick={handleDecrease} >-</button>
                            <div className="amount">
                                <p>{counterAmount}</p>
                            </div>
                            <button className=" yellow-bg increase" type="button" onClick={handleIncrease}>+</button>
                        </div>
                        <div className="flex column order-submit-area">
                            <div className="flex column order-summary-area">
                                <h3>Sipariş Toplamı</h3>
                                <div className="flex row flex-center">
                                    <h4>Seçimler</h4>
                                    <p>{extraOptionsPrice}₺</p>
                                </div>
                                <div className="flex row flex-center total-price">
                                    <h4>Toplam</h4>
                                    <p>{(dataProduct.price * counterAmount) + extraOptionsPrice}₺</p>
                                </div>
                            </div>
                            <div>
                                <button className="yellow-bg order-button" type="submit">SİPARİŞ VER</button>
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