import React, { useState } from "react";
import styles from './Table.module.css';

export default function Table() {
    return(
    <table className={styles.table}>
        <thead>
            <tr>
                <th scope="row">#</th>
                <th scope="row">Product Name</th>
                <th scope="price">Price</th>
                <th scope="quantity">Quantity</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="column">1</th>
                <th scope="column">Computer</th>
                <th scope="column">25000</th>
                <th scope="column">1</th>
            </tr>
        </tbody>
    </table>
    )
}