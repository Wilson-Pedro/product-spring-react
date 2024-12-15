import React, { useState } from "react";
import styles from './Form.module.css';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input/Input';

export default function Form({ handleSubmit, productData }) {

    const [product, setProduct] = useState(productData || {});
    const [selectFile, setSelectFile] = useState(null);

    const navigate = useNavigate();

    const submit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", product.name);
        formData.append("price", product.price);
        formData.append("quantity", product.quantity)
        if(selectFile) {
            formData.append("image", selectFile);
        }
        //console.log(formData);
        handleSubmit(product)
        setProduct([])
        setSelectFile(null);
        navigate("/")
    }

    function handleChange(e) {
        setProduct({ ...product, [e.target.name]: e.target.value })
        console.log(product)
    }

    function goBack() {
        navigate("/");
    }

    return (
        <div className={styles.container}>
            <form onSubmit={submit} className={styles.form} >
                <Input
                    label="Product Name" 
                    type="text"
                    name="name"
                    placeholder="product name"
                    onChange={handleChange}
                    value={product.name ? product.name : ''}
                />
                <Input 
                    label="Price"
                    type="text"
                    name="price"
                    placeholder="price"
                    onChange={handleChange}
                    value={product.price ? product.price : ''}
                />
                <Input 
                    label="Quantity"
                    type="text"
                    name="quantity"
                    placeholder="quantity"
                    onChange={handleChange}
                    value={product.quantity ? product.quantity : ''}
                />
                <button className={styles.button}>Cadastrar</button>
            </form>
            <div className={styles.divBtn}><button className={styles.button} onClick={() => goBack()}>Cancelar</button></div>
        </div>
    )
}