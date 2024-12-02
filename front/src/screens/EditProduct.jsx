import React from "react";
import styles from './EditProduct.module.css';
import FormEdit from '../layout/FormEdit'
import { useLocation } from "react-router-dom";

export default function EditProduct() {

    const location = useLocation();
    const { product } = location.state || {};

    function updateProduct(productData) {
        
        let url = `http://localhost:8080/products/${productData.id}`;
        console.log(url);

        fetch(`http://localhost:8080/products/${productData.id}`, {
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
            <FormEdit 
                productData={product}
                productUpdate={updateProduct}
            />
        </div>
    )
}