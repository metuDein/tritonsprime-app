import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import useAuth from '../hook/useAuth'
import axios from '../api/axios'
import { FaEthereum } from 'react-icons/fa'

const CreateNft = () => {
    const { auth } = useAuth();
    const { contractAddress } = auth.user;

    const owner = auth.user.userName

    const [nftName, setNftName] = useState('');
    const [nftImage, setNftImage] = useState('');
   
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [supply, setSupply] = useState('');
    const [blockChain, setBlockChain] = useState('');
    const [Category, setCategory] = useState('');

    const handleImageChange = (e) => {
        console.log(e);

        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            console.log(reader.result);
            setNftImage(reader.result);
        };
        reader.onerror = error => console.log("error :", error);

    }


    const handleNameChange = (e) => {
        setNftName(e.target.value);
        console.log(nftName);
    }


    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    }
    const handleDescription = (e) => {
        setDescription(e.target.value);
    }
    const handleSupplyChange = (e) => {
        setSupply(e.target.value);
    }
    const handleBlockChainChange = (e) => {
        setBlockChain(e.target.value);
    }
    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    }




    const handleNftCreate = async (e) => {
        e.preventDefault();
        
        if(!nftName || !nftImage || !price || !description || !supply ) { 

            return console.log(' all field required');

        }else{
            try {
                const response =  await axios.post('/userassets', JSON.stringify({name : nftName, image : nftImage, contractAddress : contractAddress, supply : supply, price : price,  blockchain : blockChain, desc : description, category : Category, ownername : owner  }))

            if(response.status === 400) return window.alert('check inputs');

            if (response.status === 201) return window.alert('item created');
            console.log(response.data);
                
            } catch (error) {
                console.log(error.response.status)
                console.log(error.response.data)
            }
        }

    }


    return (
        <section className="create-nft">
            <div className='create-nft-form'>
                <form encType='multipart/form-data' onSubmit={handleNftCreate}>
                    <h1>Create New Item</h1>
                    <small><span>*</span> required</small>
                    <p>Image, Video, Audio, or 3D Model</p>
                    <small>File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 99 KB</small>
                    <label htmlFor='file-upload' className='file-upload'>
                        <span className='upload-overlay'> </span>
                        <input type="file" name='nftImage' id='file-upload' onChange={handleImageChange} />
                        <span className='upload-screen-read'>{!nftImage && nftImage !== null && <FontAwesomeIcon icon={faImage} style={{ fontSize: '70px' }} />}
                            {nftImage == "" || nftImage == null ? "" : <img src={nftImage} alt="" style={{ zIndex: '10', objectFit: 'contain', width: '100%', height: '100%' }} />}</span>
                    </label>
                    <div className='nft-create-text'>
                        <label htmlFor='file-name' className='nft-create-name'>
                            Name <span>*</span>
                        </label>
                        <input 
                        type="text" 
                        name='nftName' 
                        id='file-name' 
                        placeholder='Item name' 
                        onChange={handleNameChange} 
                        value={nftName}
                        />
                    </div>
                    <div className='nft-create-text'>
                        <label htmlFor='file-price' className='nft-create-name'>
                            Price <span><FaEthereum/></span>
                        </label>
                        <input
                            type="text"
                            id='file-price'
                            placeholder='Enter price of item'
                            onChange={handlePriceChange}
                            value={price}
                        />
                    </div>
                    <div className='nft-create-text'>
                        <label htmlFor='file-description' className='nft-create-desc'>
                            <p>Description </p>
                            <small>The description will be included on the item's detail page. </small>
                        </label>
                        <textarea
                            rows={'3'}
                            cols={'30'}
                            id='file-description'
                            placeholder='Provide a detailed description of your item'
                            onChange={handleDescription}
                            value={description}
                        />
                    </div>
                    <div className='nft-create-text'>
                        <label htmlFor='file-quantity' className='nft-create-name'>
                            <p>Supply</p>
                            <small>The number of items that can be minted.</small>
                        </label>
                        <input
                            type="text"
                            id='file-price'
                            placeholder='Enter total amount available'
                            onChange={handleSupplyChange}
                            value={supply}
                        />
                    </div>
                    <div className='nft-create-text'>
                        <label htmlFor='file-blockchain' className='nft-create-desc'>
                            Blockchain
                        </label>
                        <select id='file-blockchain' placeholder='select a network' value={blockChain} onChange={handleBlockChainChange}>
                            <option >Select a Network</option>
                            <option value="Binance Smart Chain">BNB Chain</option>
                            <option value="Ethereum" >Ethereum</option>
                        </select>
                        <label htmlFor='file-blockchain' className='nft-create-desc' style={{marginTop : '20px'}}>
                            Category
                        </label>
                        <select id='file-categories' placeholder='select Category' value={Category} onChange={handleCategoryChange}>
                            <option>Select Category</option>
                            <option value="Ai art" >Ai Art</option>
                            <option value="NFTs">NFTs</option>
                            <option value="Digital Art">Digital Art</option>
                        </select>

                    </div>
                    <button> Create </button>
                </form>
            </div>

        </section>
    )
}

export default CreateNft