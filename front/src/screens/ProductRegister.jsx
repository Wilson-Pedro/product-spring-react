import React from "react";
import styles from './ProductRegister.module.css'
import Form from '../layout/Form';

export default function ProductRegister() {

    function productRegister(product) {

        fetch("http://localhost:8080/products/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
        }).then((resp => resp.json())
        ).catch(err => console.log(err))
    }

    return(
        <div className={styles.container}>
            <div className={styles.bar}>
                Product Register
            </div>
            <Form handleSubmit={productRegister} />
        </div>
    )
}