import React, { useState, useEffect } from "react";
import styles from './Table.module.css';
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Table() {

    const [products, setProducts] = useState([]);

    const navigate = useNavigate();

    const goToProductEdit = () => {
        navigate("/productEdit");
    }

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
                <th>Edit</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>1</th>
                <th>Computer</th>
                <th>1500</th>
                <th>1</th>
                <th className={styles.icon}  onClick={goToProductEdit}><FaEdit /></th>
                <th className={styles.icon} ><FaTrashAlt /></th>
            </tr>
            {products.map((product) => (
                <tr>
                    <th>{product.id}</th>
                    <th>{product.name}</th>
                    <th>{product.price}</th>
                    <th>{product.quantity}</th>
                    <th className={styles.icon} onClick={goToProductEdit}><FaEdit /></th>
                    <th className={styles.icon} ><FaTrashAlt /></th>
                </tr>
            ))}
        </tbody>
    </table>
    )
}