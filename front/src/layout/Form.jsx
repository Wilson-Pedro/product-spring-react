import React, { useState } from "react";
import styles from './Form.module.css';

export default function Form() {

    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);

    return (
        <form className={styles.form} >
            <div className={styles.divInput}>
                <label className={styles.label} htmlFor="">Product Name: </label> <br/>
                <input
                    className={styles.input}
                    type="text"
                    id="productName"
                    name="productName"
                    placeholder="product name"
                    onChange={(e) => setName(e.target.value)}
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
                    onChange={(e) => setPrice(e.target.value)}
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
                    onChange={(e) => setQuantity(e.target.value)}
                />
            </div>

            <button className={styles.button}>Cadastrar</button>
        </form>
    )
}