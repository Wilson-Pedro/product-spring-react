import React from "react";
import Form from "../layout/Form"
import styles from './Home.module.css';
import Table from './../layout/Table';

export default function Home() {
    return (
        <div className={styles.container}>
            <div>
                <Form />
            </div>
            <div className={styles.divTable}>
                <Table />
            </div>
        </div>
    )
}