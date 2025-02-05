import React from "react";
import styles from './ProductDelete.module.css';
import { useNavigate, useLocation } from 'react-router-dom';

const { REACT_APP_API_URL } = process.env;

export default function ProductDelete() {

    const location = useLocation();
    const navigate = useNavigate();

    const { id } = location.state || 1;

    function deleteProduct() {
        fetch(`${REACT_APP_API_URL}/products/${id}`, {
            method: 'DELETE',
        }).then((resp) => resp.json()).catch((err) => console.log(err));
        
        goBack();
    }

    function goBack() {
        navigate("/");
    }

    return (
        <div className={styles.container}>
            <div className={styles.bar}>
                Product Delete
            </div>
            <div className={styles.container2}>
                <h2>Tem certeza que quer deletar? </h2>
                <div className={styles.divBtn}>
                    <button className={`${styles.button} ${styles.btnCadastrar}`}  onClick={() => deleteProduct()}>Deletar</button>
                    <button className={`${styles.button} ${styles.btnCancelar}`} onClick={() => goBack()}>Cancelar</button>
                </div>
            </div>
        </div>
    )
}