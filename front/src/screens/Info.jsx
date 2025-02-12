import React from 'react';
import { useLocation } from "react-router-dom";
import styles from './Info.module.css';
import { IoArrowBackCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function Info() {

    const navigate = useNavigate();

    const location = useLocation();
    const { product } = location.state || {};
    console.log(product);

    function goToHome() {
        navigate("/");
    }

    return(
        <div className={styles.container}>
            <div className={styles.bar}>
                <div>
                    <i onClick={goToHome}><IoArrowBackCircle /></i>
                </div>
                <div>Info about Product</div>
            </div>
            <div className={styles.imgDiv}>
                <img src={product.imageUrl} alt="image of product"  />
            </div>
            <div className={styles.infoDiv}>
                <p>Product name: <span>{product.name || ''}</span></p>
                <p>Price: <span>{product.price || ''}</span></p>
                <p>Quantity: <span>{product.quantity || ''}</span></p>
            </div>
        </div>
    );
}