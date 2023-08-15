import React, { useState } from 'react'
import axios from '../api/axios'
const ImagTest = () => {
    const [img, setImg] = useState('');
    const [file, setFile] = useState([]);
    const [displayImg, setDisplayImg] = useState('')
    
    
   

    const handleImageUpload = async (e) => {
        e.preventDefault();

        if (img === '') return window.alert('image size error')

        try {
            const response = await axios.post('/imageupload', JSON.stringify({ image : img}))
            setDisplayImg(response.data.uploadImg);
            alert('upload successful')
        } catch (error) {
            console.log(error)
        }


    }

    const handleImageChange = (e) => {
        console.log(e);

        const file = e.target.files[0];

        setFile(file)
        console.log(file);

        setImg(file)

        // Check if the file size exceeds the limit (in bytes)
        const maxSize = 5 * 1024 * 1024; // 5MB
        if (file && file.size > maxSize) {
            alert('Image size exceeds the limit of 5MB.');
            return;
        }

        const reader = new FileReader();
        reader.readAsDataURL(file);


        reader.onload = () => {
            console.log(reader.result);
            setImg(reader.result);
        };
        reader.onerror = error => {
            return console.log("error :", error)
        };

    }

    return (
        <div style={{ marginTop: "40px" }}>
            <input type="file" onChange={handleImageChange} />
            <button onClick={handleImageUpload}>Submit </button>
            <img src={`${displayImg}`} alt="trst" width={'200px'} height={"200px"}/>
        </div>
    )
}

export default ImagTest