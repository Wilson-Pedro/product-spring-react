import React, { useState, useEffect } from "react";
import styles from './Table.module.css';
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Table() {

    const [products, setProducts] = useState([]);

    const navigate = useNavigate();

    let index = 1;

    function incrementIndex() {
        index++;
    }

    function goToProductEdit(product) {
        navigate("/productEdit", { state: { product } });
    }

    function deleteProduct(id) {
        fetch(`http://localhost:8080/products/${id}`, {
            method: 'DELETE',
        }).then((resp) => resp.json()).catch((err) => console.log(err))
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
            {products.map((product) => (
                <tr key={product.id}>
                    <th>{index}</th>
                    <th>{product.name}</th>
                    <th>{product.price}</th>
                    <th>{product.quantity}</th>
                    <th className={styles.icon} onClick={() => goToProductEdit(product)}><FaEdit /></th>
                    <th className={styles.icon} onClick={() => deleteProduct(product.id)}><FaTrashAlt /></th>
                    {incrementIndex()}
                </tr>
            ))}
        </tbody>
    </table>
    )
}