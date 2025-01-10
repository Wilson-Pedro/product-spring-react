import React, { useState, useEffect } from "react";
import styles from './Table.module.css';
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function Table() {

    // const product = {
    //     name: 'Computer',
    //     price: 2500,
    //     quantity: 1,
    //     imageName: 'Computer.jpg'
    // }

    const [products, setProducts] = useState([]);

    const navigate = useNavigate();

    function goToProductEdit(product) {
        navigate("/productEdit", { state: { product } });
    }

    function goToInfo(product) {
        navigate("/info", { state: { product } })
    }

    function goToProductDelete(id) {
        navigate("/productDelete", { state: { id } });
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
                <th>Info</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {/* <tr>
                <th>1</th>
                <th>Computer</th>
                <th>2500</th>
                <th>1</th>
                <th className={styles.icon} onClick={() => goToInfo(product)}><FaCircleInfo /></th>
                <th className={styles.icon} onClick={() => goToProductEdit(product)}><FaEdit /></th>
                <th className={styles.icon} onClick={() => goToProductDelete(product.id)}><FaTrashAlt /></th>
            </tr> */}
            {products.map((product, index) => (
                <tr key={product.id}>
                    <th>{index+1}</th>
                    <th>{product.name}</th>
                    <th>{product.price}</th>
                    <th>{product.quantity}</th>
                    <th className={styles.icon} onClick={() => goToInfo(product)}><FaCircleInfo /></th>
                    <th className={styles.icon} onClick={() => goToProductEdit(product)}><FaEdit /></th>
                    <th className={styles.icon} onClick={() => goToProductDelete(product.id)}><FaTrashAlt /></th>
                </tr>
            ))}
        </tbody>
    </table>
    )
}