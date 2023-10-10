import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import * as Yup from "yup";
import axios from "axios";

import Product from "./components/Product";
import { ExtraOptionsData } from "../../data/ExtraOptionsData";

import "./OrderForm.css";

//YUP SCHEMA
const formSchema = Yup.object().shape({
    size: Yup
        .string()
        .oneOf(["small", "mid", "big"], "Bir pizza boyu seçmelisiniz.")
        .required("Pizza boyu seçimi gereklidir."),
    dough: Yup
        .string()
        .oneOf(["thin", "mid", "thick"], "Bir pizza hamur kalınlığı seçmelisiniz.")
        .required("Pizza hamuru seçimi gereklidir."),
    extraOptions: Yup
        .array().max(10).of(Yup.string().required("Ekstra malzeme 10 ile sınırlıdır")).required("Ekstra malzeme 10 ile sınırlıdır"),
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
    const [initialData, setInitialData] = useState({
        title: "",
        price: 0,
        description: "",
        rate: "",
        comment: "",
        size: "",
        dough: "",
        extraOptions: [],
        orderNote: "",
        amount:0,
        extraOptionsPrice: "",
        totalPrice: "",
    })

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
        setFormData({ ...formData, extraOptions: [...extraOptions, option] })
    }

    //updating datas

    useEffect(() => {
        setExtraOptionsPrice((extraOptions.length * optionPrice) * counterAmount);
        setTotalPrice((dataProduct.price.toFixed(2) * counterAmount) + extraOptionsPrice);
        setFormData({...formData,
                        extraOptionsPrice:extraOptionsPrice,
                        totalPrice: totalPrice,
                        amount:counterAmount
                    })
    }, [extraOptions, counterAmount, extraOptionsPrice, totalPrice])

    //every form element listener and data transfer to formData (without checkboxes)
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        const newFormData = {
            ...formData, 
            ...dataProduct,
            amount: counterAmount,
            extraOptions: [...extraOptions],
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
            <div className="flex  column vw37 order-form">
                <Product dataProduct={dataProduct} />
                <form className="flex column gap-2" onSubmit={handleSubmit}>
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
                                <select id="dough" name="dough" defaultValue="doughThickness" onChange={handleChange}>
                                    <option value="doughThickness" selected> Hamur Kalınlığı</option>
                                    <option selected={formData.dough === "thin"} value="thin" name="dough"> İnce</option>
                                    <option selected={formData.dough === "mid"} value="mid" name="dough"> Orta</option>
                                    <option selected={formData.dough === "thick"} value="thick" name="dough"> Kalın</option>
                                </select>
                            </div>
                        
                        </div>
                        <p >{errors.size}</p>
                        <p >{errors.dough}</p>
                    </div>
                    <div className="flex column">
                        <h3>Ek Malzemeler</h3>
                        <p>En fazla 10 malzeme seçebilirsiniz. Adet: 5₺</p>
                        <div className="flex extra-options">
                            {ExtraOptionsData.map((option, index) => {
                                return (
                                    <label key={index} className="option">
                                        <input type="checkbox" value={option} onChange={handleExtraOptionsChange} name="extraOptions" /> {option}
                                    </label>
                                )
                            })}
                        </div>
                        <p >{errors.extraOptions}</p>
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
                            <button className=" yellow-bg decrease" type="button" disabled={counterAmount === 1 ? true : false} onClick={handleDecrease}>-</button>
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
                                    <p>{totalPrice}₺</p>
                                </div>
                            </div>
                            <div className="order-button">
                                <button className="yellow-bg " type="submit" disabled={!isValid} >SİPARİŞ VER</button>
                            </div >
                        </div>
                    </div>
                </form>
            </div>
            <div className="footer">
            </div>
        </div>
    )
}