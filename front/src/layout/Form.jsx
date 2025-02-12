import React, { useState } from "react";
import styles from './Form.module.css';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input/Input';

export default function Form({ handleSubmit, productData }) {

    const [product, setProduct] = useState(productData || {});
    const [selectFile, setSelectFile] = useState(null);

    const navigate = useNavigate();

    const submit = (e) => {
        e.preventDefault();

        if(selectFile != null) {
            setProduct({ ...product, [e.target.multipartFile]: selectFile  })
        } else {
            setProduct({ ...product, [e.target.multipartFile]: null  })
        }
        const formData = new FormData();

        formData.append("name", product.name);
        formData.append("price", product.price);
        formData.append("quantity", product.quantity);
        formData.append("multipartFile", selectFile);

        handleSubmit(formData);
    }


    function handleChange(e) {
        setProduct({ ...product, [e.target.name]: e.target.value })
    }

    const handleFileChange = async (e) => {
        if(e.target.files[0] != null) {
            setSelectFile(e.target.files[0]);
            //setProduct({ ...product, [e.target.name]: e.target.files[0].name })
        }
    }

    function goBack() {
        navigate("/");
    }

    return (
        <div className={styles.formContainer}>
            <form onSubmit={submit} className={styles.form} >
                <Input
                    label="Product Name" 
                    type="text"
                    name="name"
                    placeholder="product name"
                    onChange={handleChange}
                    value={product.name ? product.name : ''}
                />
                <Input 
                    label="Price"
                    type="text"
                    name="price"
                    placeholder="price"
                    onChange={handleChange}
                    value={product.price ? product.price : ''}
                />
                <Input 
                    label="Quantity"
                    type="text"
                    name="quantity"
                    placeholder="quantity"
                    onChange={handleChange}
                    value={product.quantity ? product.quantity : ''}
                />
                <div className={styles.divInput}>  
                    <input 
                        className={styles.input} 
                        name="multipartFile" 
                        type="file" 
                        onChange={handleFileChange} />
                </div>
                {/* <button className={styles.button}>Cadastrar</button> */}
            </form>
            <div className={styles.divBtn}>
                <button className={`${styles.button} ${styles.btnCadastrar}`} onClick={submit} >Cadastrar</button>
                <button className={`${styles.button} ${styles.btnCancelar}`} onClick={() => goBack()}>Cancelar</button>
            </div>
        </div>
    )
}