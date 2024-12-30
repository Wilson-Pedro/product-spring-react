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

        setProduct({ ...product, [e.target.imageName]: selectFile.name  })

        if(selectFile != null) {
            uploadImage(selectFile);
        }
        handleSubmit(product)
        setProduct([])
        navigate("/")
    }

    function uploadImage(selectFile) {
        if(!selectFile) {
            alert('Por favor selecione um arquivo')
            return
        } else {
            const formData = new FormData();
            formData.append("file", selectFile);

            try {
                fetch("http://localhost:8080/upload/image", {
                    method: 'POST',
                    body: formData,
                });
            } catch(error) {
                console.log("Error ao enviar arquivo");
                alert("Error ao enviar arquivo");
            }
        }
    }

    function handleChange(e) {
        setProduct({ ...product, [e.target.name]: e.target.value })
    }

    const handleFileChange = async (e) => {
        setSelectFile(e.target.files[0]);
        setProduct({ ...product, [e.target.name]: e.target.files[0].name })
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
                        name="imageName" 
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