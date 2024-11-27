import React, { useState, useEffect } from "react";
import styles from './Table.module.css';


export default function Table() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/products", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((resp) => resp.json())
        .then((data) => {
            setProducts(data)
        })
        .catch((err) => console.log(err))
    }, [])

    return(
    <table className={styles.table}>
        <thead>
            <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
            </tr>
        </thead>
        <tbody>
            {products.map((product) => (
                <tr>
                    <th>{product.id}</th>
                    <th>{product.name}</th>
                    <th>{product.price}</th>
                    <th>{product.quantity}</th>
                </tr>
            ))}
        </tbody>
    </table>
    )
}