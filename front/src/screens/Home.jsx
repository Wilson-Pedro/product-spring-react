import React from "react";
import Form from "../layout/Form"
import styles from './Home.module.css';
import Table from './../layout/Table';

export default function Home() {

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

    return (
        <div className={styles.container}>
            <div>
                <Form handleSubmit={productRegister} />
            </div>
            <div className={styles.divTable}>
                <Table/>
            </div>
        </div>
    )
}