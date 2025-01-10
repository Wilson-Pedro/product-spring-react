import React from "react";
import styles from './ProductRegister.module.css'
import Form from '../layout/Form';
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ProductRegister() {

    const navigate = useNavigate();

    function productRegister(product) {
        axios.post("http://localhost:8080/products/", product, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((response) => {
            console.log("Product registed sucessfully", response.data);
            navigate("/");
        })
        .catch((error) => {
            if(error.response && error.response.data) {
                alert(error.response.data.title || "Error ocurred during register product")
            } else {
                alert("Network error or unexpected error ocurred")
            }
            console.log(error)
        });
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

