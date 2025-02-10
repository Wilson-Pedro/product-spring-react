import React from "react";
import styles from './ProductRegister.module.css'
import Form from '../layout/Form';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const { REACT_APP_API_URL } = process.env;

export default function ProductRegister() {

    const navigate = useNavigate();

    function productRegister(formData) {
        axios.post(`${REACT_APP_API_URL}/products/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
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

