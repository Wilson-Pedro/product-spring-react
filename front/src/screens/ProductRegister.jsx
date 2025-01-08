import React, { useState } from "react";
import styles from './ProductRegister.module.css'
import Form from '../layout/Form';
import axios from "axios";

export default function ProductRegister() {

    const [errorMessage, setErrorMessage] = useState('');

    // function productRegister(product) {
    //     axios.post("http://localhost:8080/products/", product, {
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //     })
    //     .then((response) => {
    //         console.log("Product registed sucessfully", response.data);
    //         setErrorMessage('');
    //     })
    //     .catch((error) => {
    //         if(error.response && error.response.data) {
    //             setErrorMessage(error.response.data.title || "Error ocurred during register product")
    //         } else {
    //             setErrorMessage("Network error or unexpected error ocurred")
    //         }
    //         console.log(error)
    //     });
    // }

    return(
        <div className={styles.container}>
            <div className={styles.bar}>
                Product Register {errorMessage}
            </div>
            <Form handleSubmit={productRegister} />
        </div>
    )
}

