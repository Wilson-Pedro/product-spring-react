import React from "react";
import styles from './EditProduct.module.css';
import FormEdit from '../layout/FormEdit'

export default function EditProduct() {
    return(
        <div className={styles.container}>
            <FormEdit />
        </div>
    )
}