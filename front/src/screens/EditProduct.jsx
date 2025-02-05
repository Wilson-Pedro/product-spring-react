import React from "react";
import styles from './EditProduct.module.css';
import FormEdit from '../layout/FormEdit';
import { useLocation } from "react-router-dom";

const { REACT_APP_API_URL } = process.env;

export default function EditProduct() {

    const location = useLocation();
    const { product } = location.state || {};

    function updateProduct(productData) {

        fetch(`${REACT_APP_API_URL}/products/${productData.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(productData),
        }).then((data => data.json())
        ).catch(error => console.log(error));
    }

    return(
        <div className={styles.container}>
            <div className={styles.bar}>
                Product Edit
            </div>
            <FormEdit 
                productData={product}
                productUpdate={updateProduct}
            />
        </div>
    )
}