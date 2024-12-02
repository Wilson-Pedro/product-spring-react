import React, { useState } from "react";
import styles from './Form.module.css';
import { useNavigate } from 'react-router-dom';

export default function Form({ handleSubmit, productData }) {

    const [product, setProduct] = useState(productData || {});

    const navigate = useNavigate();

    const submit = (e) => {
        e.preventDefault();
        handleSubmit(product)
        setProduct([])
        navigate("/")
    }

    function handleChange(e) {
        setProduct({ ...product, [e.target.name]: e.target.value })
    }

    return (
        <form onSubmit={submit} className={styles.form} >
            <div className={styles.divInput}>
                <label className={styles.label} htmlFor="">Product Name: </label> <br/>
                <input
                    className={styles.input}
                    type="text"
                    id="name"
                    name="name"
                    placeholder="product name"
                    onChange={handleChange}
                    value={product.name ? product.name : ''}
                />
            </div>

            <div className={styles.divInput}>
                <label className={styles.label} htmlFor="">Price: </label> <br/>
                <input
                    className={styles.input}
                    type="text"
                    id="price"
                    name="price"
                    placeholder="price"
                    onChange={handleChange}
                    value={product.price ? product.price : ''}
                />
            </div>

            <div className={styles.divInput}>
                <label className={styles.label} htmlFor="">Quantity: </label> <br/>
                <input
                    className={styles.input}
                    type="text"
                    id="quantity"
                    name="quantity"
                    placeholder="quantity"
                    onChange={handleChange}
                    value={product.quantity ? product.quantity : ''}
                />
            </div>

            <button className={styles.button}>Cadastrar</button>
        </form>
    )
}