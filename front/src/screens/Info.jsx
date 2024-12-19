import React from 'react';
import { useLocation } from "react-router-dom";
import styles from './Info.module.css';
import { IoArrowBackCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function Info() {

    const navigate = useNavigate();

    const location = useLocation();
    const { product } = location.state || {};

    const imagePath = `${process.env.PUBLIC_URL}/img/${product.imageName}`;

    function goToHome() {
        navigate("/");
    }

    return(
        <div className={styles.container}>
            <div>
                <i onClick={goToHome}><IoArrowBackCircle /></i>
            </div>
            <div className={styles.imgDiv}>
                <img src={imagePath} />
            </div>
            <div>
                <p>Product name: <span>{product.name || ''}</span></p>
                <p>Price: <span>{product.price || ''}</span></p>
                <p>Quantity: <span>{product.quantity || ''}</span></p>
            </div>
        </div>
    );
}