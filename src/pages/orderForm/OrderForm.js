import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import * as Yup from "yup";
import axios from "axios";
import Header from "../../layout/Header";

import { ExtraOptionsData } from "../../data/ExtraOptionsData";
import Footer from "../../layout/Footer";
import "./OrderForm.css";

//YUP SCHEMA
const formSchema = Yup.object().shape({
    size: Yup
        .string()
        .oneOf(["Küçük", "Orta", "Büyük"], "Bir pizza boyu seçmelisiniz.")
        .required("Pizza boyu seçimi gereklidir."),
    dough: Yup
        .string()
        .oneOf(["İnce", "Orta", "Kalın"], "Bir pizza hamur kalınlığı seçmelisiniz.")
        .required("Pizza hamuru seçimi gereklidir."),
    extraOptions: Yup
        .array().max(10).of(Yup.string()),
})

export default function OrderForm(props) {
    const { dataProduct, handleOrder } = props;
    let history = useHistory();
    //yup validation
    const [isValid, setIsValid] = useState(false);

    const [extraOptions, setExtraOptions] = useState([]);
    const [extraOptionsPrice, setExtraOptionsPrice] = useState(0);
    const optionPrice = 5;

    const [counterAmount, setCounterAmount] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);

    //base data form
    const initialData = {
        title: "",
        price: 0,
        description: "",
        rate: "",
        comment: "",
        size: "",
        dough: "",
        extraOptions: "",
        orderNote: "",
        amount: 0,
        extraOptionsPrice: "",
        totalPrice: "",
    }

    const [formData, setFormData] = useState(initialData);

    //error states
    const [errors, setErrors] = useState({
        size: "",
        dough: "",
        extraOptions: "",
    })

    const handleDecrease = () => {
        if (counterAmount > 1) {
            setCounterAmount(counterAmount - 1)
        }
    }
    const handleIncrease = () => {
        setCounterAmount(counterAmount + 1);
    }

    // Checkbox listener and data transfer to formData
    const handleExtraOptionsChange = (e) => {
        const option = e.target.value;

        if (extraOptions.includes(option)) {
            setExtraOptions(extraOptions.filter((item) => item !== option));
        } else {
            setExtraOptions([...extraOptions, option])
        }
    }

    //updating datas

    useEffect(() => {
        setExtraOptionsPrice((extraOptions.length * optionPrice) * counterAmount);
        setTotalPrice((dataProduct.price.toFixed(2) * counterAmount) + extraOptionsPrice);
        setFormData({
            ...formData, extraOptions: extraOptions,
            extraOptionsPrice: extraOptionsPrice,
            totalPrice: totalPrice,
            amount: counterAmount
        })
    }, [extraOptions, counterAmount, extraOptionsPrice, totalPrice])

    //every form element listener and data transfer to formData (without checkboxes)
    const handleChange = (e) => {
        const { value, name } = e.target
        const newFormData = {
            ...formData,
            ...dataProduct,
            amount: counterAmount,
            [name]: value
        };
        //console.log("handleChange", newFormData, "target-name", name);
        if (name !== "orderNote") {
            Yup.reach(formSchema, name)
                .validate(value)
                .then((valid) => {
                    setErrors({ ...errors, [name]: "" })
                })
                .catch((err) => {
                    setErrors({ ...errors, [name]: err.errors[0] })
                });
        }
        console.log("name:", name, "value:", value);
        setFormData(newFormData);
    }

    // validation controller
    useEffect(() => {
        formSchema.isValid(formData).then((valid) => setIsValid(valid));
    }, [formData, extraOptions]);

    //form submit 
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("https://reqres.in/api/users", formData)
            .then((res) => {
                console.log("axios", formData)
                console.log("res", res.data)
                handleOrder(res.data);
            })
            .catch((err) => {
                console.error(err.response.message);
            });
        setFormData(initialData);
        history.push("/order/confirmedOrder")
    }
    return (
        <div className="order-form-container ">
            <Header dataProduct={dataProduct} />
            <div className="flex  column vw37 order-form">
                <form className="flex column gap-2" onSubmit={handleSubmit}>
                    <div className="flex row psize-pdough-area">
                        <div className="flex column gap-1">
                            <h3>Boyut Seç<span>*</span></h3>
                            <div className="inline-flex row gap-1">
                                <div className="radio">
                                    <input className="radio-input" id="Küçük" type="radio" value="Küçük" checked={formData.size === "Küçük"} name="size" onChange={handleChange} />
                                    <label className="radio-label" htmlFor="Küçük">S</label>
                                    <input className="radio-input" id="Orta" type="radio" value="Orta" checked={formData.size === "Orta"} name="size" onChange={handleChange} />
                                    <label className="radio-label" htmlFor="Orta">M</label>
                                    <input className="radio-input" id="Büyük" type="radio" value="Büyük" checked={formData.size === "Büyük"} name="size" onChange={handleChange} />
                                    <label className="radio-label" htmlFor="Büyük">L</label>
                                </div>
                            </div>
                        </div>
                        <div className="flex column gap-1">
                            <h3>Hamur Seç<span>*</span></h3>
                            <div className="pdough">
                                <select className="select" id="dough" name="dough" defaultValue="doughThickness" onChange={handleChange}>
                                    <option value="doughThickness" disabled selected>--Hamur Kalınlığı Seç--</option>
                                    <option selected={formData.dough === "İnce"} value="İnce" name="dough"> İnce</option>
                                    <option selected={formData.dough === "Orta"} value="Orta" name="dough"> Orta</option>
                                    <option selected={formData.dough === "Kalın"} value="Kalın" name="dough"> Kalın</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="flex column">
                        <h3>Ek Malzemeler</h3>
                        <p>En fazla 10 malzeme seçebilirsiniz. Adet: 5₺</p>
                        <div className="flex extra-options">
                            {ExtraOptionsData.map((option, index) => {
                                return (
                                    <div className="checkbox-area">
                                        <label key={index} className="checkbox" htmlFor={`myCheckboxId${index}`}>
                                            <input className="checkbox-input" type="checkbox" value={option} onChange={handleExtraOptionsChange} name="extraOptions" id={`myCheckboxId${index}`} />
                                            <div className="checkbox-box"></div>
                                            {option}
                                        </label>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="flex column order-note">
                        <h3>Sipariş Notu</h3>
                        <input className="bg-color-light-non-border order-note-input" type="text" placeholder="Siparişine eklemek istediğin bir not var mı?" name="orderNote" onChange={handleChange}></input>
                    </div>
                    <hr></hr>
                    <div className="flex row gap-2 ">
                        <div className="flex row order-amount">
                            <button className="bg-color-light-non-border decrease" type="button" disabled={counterAmount === 1 ? true : false} onClick={handleDecrease}>-</button>
                            <div className="bg-color-light-non-border amount">
                                <p>{counterAmount}</p>
                            </div>
                            <button className="bg-color-light-non-border increase" type="button" onClick={handleIncrease}>+</button>
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
                                    <p>{totalPrice}₺</p>
                                </div>
                            </div>
                            <div className=" submit-order-button">
                                <button className="yellow-bg-non-border " type="submit" disabled={!isValid} >SİPARİŞ VER</button>
                            </div >
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}