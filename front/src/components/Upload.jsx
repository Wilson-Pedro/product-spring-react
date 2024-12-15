import React, { useState } from 'react';

export default function Upload() {

    const [selectFile, setSelectFile] = useState(null);

    const handleFileChange = async (e) => {
        setSelectFile(e.target.files[0])
    }

    const handleUpload = async() => {
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

    return(
        <div>  
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Enviar</button>
        </div>
    )
}