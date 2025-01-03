import React from "react";
import styles from './Home.module.css';
import Table from './../layout/Table';
import { useNavigate } from 'react-router-dom';

export default function Home() {

    const navigate = useNavigate();

    function goToProductRegister() {
        navigate("/productRegister");
    }

    return (
        <div className={styles.container}>
            <div className={styles.bar}>
                Product CRUD
            </div>
            <div className={styles.divBtn}>
                <button onClick={goToProductRegister} className={styles.button}>Cadastrar</button>
            </div>
            <div className={styles.divTable}>
                <Table/>
            </div>
        </div>
    )
}