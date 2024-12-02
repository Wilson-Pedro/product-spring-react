import React, { useState, useEffect } from "react";
import styles from './Form.module.css';
import { useNavigate } from "react-router-dom";

export default function FormEdit({ productData, productUpdate }) {

    const [product, setProduct] = useState(productData || {});

    const navigate = useNavigate();

    function goBack() {
        setProduct(productData)
        navigate("/");
    }

    useEffect(() => {
        setProduct(productData || {})
    }, [productData])

    const update = (e) => {
        e.preventDefault();
        productUpdate(product);
        navigate("/");
    }

    function handleChange(e) {
        setProduct({ ...product, [e.target.name]: e.target.value })
    }

    return (
        <form onSubmit={update} className={styles.form} >
            <div>
                <h1>Product Edit</h1>
            </div>
            <div className={styles.divInput}>
                <label className={styles.label} htmlFor="">Product Name: </label> <br/>
                <input
                    className={styles.input}
                    type="text"
                    id="name"
                    name="name"
                    placeholder="product name"
                    onChange={handleChange}
                    value={product.name || ''}
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
                    value={product.price || ''}
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
                    value={product.quantity || ''}
                />
            </div>

            <button className={styles.button}>Atualizar</button>
            <button className={styles.button} onClick={() => goBack()}>Voltar</button>
        </form>
    )
}