import React, { useState } from "react";
import styles from './Form.module.css';

export default function FormEdit({ handleUpdate, productData }) {

    const [product, setProduct] = useState(productData || {});

    const update = (e) => {
        e.preventDefault();
        handleUpdate();
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