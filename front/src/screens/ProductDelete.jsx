import React from "react";
import styles from './ProductDelete.module.css';
import { useNavigate, useLocation } from 'react-router-dom';

export default function ProductDelete() {

    const location = useLocation();
    const navigate = useNavigate();

    const { id } = location.state || 1;

    function deleteProduct() {
        fetch(`http://localhost:8080/products/${id}`, {
            method: 'DELETE',
        }).then((resp) => resp.json()).catch((err) => console.log(err));
        
        goBack();
    }

    function goBack() {
        navigate("/");
    }

    return (
        <div className={styles.container}>
            <div className={styles.container2}>
                <h2>Tem certeza que quer deletar? {id}</h2>
                <div className={styles.divBtn}>
                    <button className={styles.button} onClick={() => deleteProduct()}>Deletar</button>
                    <button className={styles.button} onClick={() => goBack()}>Cancelar</button>
                </div>
            </div>
        </div>
    )
}