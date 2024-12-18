import React, { useState } from 'react';
import styles from './Upload.module.css';

export default function Upload({ sendToFather, hanldeImage }) {

    const [selectFile, setSelectFile] = useState(null);

    const handleFileChange = async (e) => {
        setSelectFile(e.target.files[0]);
    }

    const handleToFather = () => {
        sendToFather(selectFile.name);
    }

    const handleUpload = async() => {
        handleToFather();
        hanldeImage(selectFile);
    }

    return(
        <div className={styles.divInput}>  
            <input className={styles.input} type="file" onChange={handleFileChange} />
            <button className={styles.btn} onClick={handleUpload}>Enviar</button>
        </div>
    )
}