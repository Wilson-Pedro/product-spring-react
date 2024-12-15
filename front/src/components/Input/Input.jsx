import React from 'react';
import styles from './Input.module.css';

export default function Input({ label, type, name, placeholder, onChange, value }) {
    return(
        <div className={styles.divInput}>
            <label className={styles.label} htmlFor="">{label}: </label> <br/>
            <input
                className={styles.input}
                type={type}
                id={name}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
        </div>
    )
}