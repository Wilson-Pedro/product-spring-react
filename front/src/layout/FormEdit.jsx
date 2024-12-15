import React, { useState, useEffect } from "react";
import styles from './Form.module.css';
import { useNavigate } from "react-router-dom";
import Input from '../components/Input/Input';

export default function FormEdit({ productData, productUpdate }) {

    const [product, setProduct] = useState(productData || {});

    const navigate = useNavigate();

    function goBack() {
        setProduct(productData)
        navigate("/");
    }

    useEffect(() => {
        setProduct(productData || {})
    }, [productData])

    const update = (e) => {
        e.preventDefault();
        productUpdate(product);
        navigate("/");
    }

    function handleChange(e) {
        setProduct({ ...product, [e.target.name]: e.target.value })
    }

    return (
        <form onSubmit={update} className={styles.form} >
            <div>
                <h1>Product Edit</h1>
            </div>
            <Input
                label="Product Name" 
                type="text"
                name="name"
                placeholder="product name"
                onChange={handleChange}
                value={product.name || ''}
            />
            <Input
                label="Price" 
                type="text"
                name="price"
                placeholder="price"
                onChange={handleChange}
                value={product.price || ''}
            />
            <Input
                label="Quantity" 
                type="text"
                name="quantity"
                placeholder="quantity"
                onChange={handleChange}
                value={product.quantity || ''}
            />

            <button className={styles.button}>Atualizar</button>
            <button className={styles.button} onClick={() => goBack()}>Voltar</button>
        </form>
    )
}