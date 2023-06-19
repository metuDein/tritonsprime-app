import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet, faArrowLeft, faUser, faCircleCheck, faMessage } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react';
import DataContext from '../context/DataContext';
import useAuth from '../hook/useAuth';
import Web3 from 'web3';
import axios from '../api/axios';


import { Link, useLocation, useNavigate } from 'react-router-dom';


const WalletLogin = () => {
    


    const { auth, setAuth } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/';



    const [getKey, setGetKey] = useState(null);
    const [contractAddress, setContractAddress] = useState('');
    const [privateKey, setPrivatekey] = useState('');
    const [userName,  setUserName] = useState('');
    const [userEmail,  setUserEmail] = useState('');
    const [userImage,  setUserImage] = useState('');
    const [addmore, setAddMore] = useState(false)


    const handleSkip = () => {
        setAddMore(false)
        navigate(from, {replace : true});
    }

    const handleAddMore = async () => {
        const response = await axios.patch('/addmoreinfo', JSON.stringify({ contractAddress : contractAddress, userEmail : userEmail, userName : userName}));
        
        if(response.status === 200) 
        navigate(from, {replace : true});

    }
        
    





    const signUser = async () => {

        const ethereum = window.ethereum;
        if (!ethereum) return console.log('no metamask');

        const connect = await ethereum.request({ method: 'eth_requestAccounts' });

        if (!connect) return console.log('connection failed');

        const web3 = new Web3(ethereum);
        const accounts = await web3.eth.getAccounts();

        if (!accounts) return console.log('!no Acccounts');

        let userAccount = accounts[0];


        console.log(accounts);
        console.log(userAccount);

        
        setContractAddress(userAccount);
        try {

            const response = await axios.post('/checkwalletauth', JSON.stringify({ walletAddress : userAccount }));
            console.log(response.status);
            console.log(response.data);

            if (response.status === 204) {
                setGetKey(true);

                if (!privateKey) return console.log('private key required');
                console.log(privateKey);

                const validKey = privateKey.length === 64

                if (!validKey) return console.log('invalid key', privateKey.length);

                const addKey = `0x${privateKey}`
                console.log(addKey);


                const response = await axios.post('/userwalletauth', JSON.stringify({ walletAddress: userAccount, privateKey: addKey }));

                if (response.status === 200) {
                    setAuth(response.data);
                    console.log(auth);

                    setAddMore(true)
                    // navigate(from, {replace : true});
                }
                
                console.log(response.status)
                console.log(response.data)
                
            }
            setAuth(response.data);
            console.log(auth);
            
                navigate(from, {replace : true});

        } catch (error) {
            console.log(error.response.data)
            console.log(error.response.status)
        }

    }
    const handleImageChange = (e) => {
        console.log(e);

        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            console.log(reader.result);
            setUserImage(reader.result);
        };
        reader.onerror = error => console.log("error :", error);

    }

    const handleNameChange = (e) => {
        setUserName(e.target.value)
        console.log(userName)
    }
    const handleEmailChange = (e) => {
        setUserName(e.target.value)
        console.log(userName)
    }
    



    return (
        <section className='wallet--sect'>
         {addmore &&  
         <section className='add-more'>
                <form> 
                <div className='create-nft-form wallet--login'>
                <form encType='multipart/form-data' >
                    <h1><FontAwesomeIcon icon={faCircleCheck} style={{color: "#19942e",}} /> Integration Successful</h1>
                    <h1>Add more info</h1>

                    <p>User Image</p>
                    <label htmlFor='file-upload' className='file-upload'>
                        <span className='upload-overlay'> </span>
                        <input type="file" name='nftImage' id='file-upload' onChange={handleImageChange} />
                        <span className='upload-screen-read'>{!userImage && userImage !== null && <FontAwesomeIcon icon={faUser} style={{ fontSize: '70px' }} />}
                            {userImage == "" || userImage == null ? "" : <img src={userImage} alt="" style={{ zIndex: '10', objectFit: 'contain', width: '100%', height: '100%' }} />}</span>
                    </label>
                    <div className='nft-create-text'>
                        <label htmlFor='file-name' className='nft-create-name'>
                            Name 
                        </label>
                        <input
                            type="text"
                            name='nftName'
                            id='file-name'
                            placeholder='User name'
                            onChange={handleNameChange}
                            value={userName}
                        />
                    </div>
                    <div className='nft-create-text'>
                        <label htmlFor='user-email' className='nft-create-name'>
                            <p>Email Address</p> <span></span>
                        </label>
                        <input
                            type="text"
                            id='user-email'
                            placeholder='your email'
                            onChange={handleEmailChange}
                            value={userEmail}
                        />
                    </div>

                    <button onClick={handleAddMore}> Done </button>
                    <button style={{marginLeft : '10px'}} onClick={handleSkip}> Skip</button>
                </form>
            </div>
                </form>
            </section> }

            <button className='return-button'>
                <Link to={'/'} style={{ color: '#000', width: '100%' }}>
                    <FontAwesomeIcon icon={faArrowLeft} style={{ fontSize: '16px' }} />
                </Link>
            </button>
            <div className='connect--wallet'>
                <span className='image--span'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/2048px-MetaMask_Fox.svg.png" alt="wallet logo" />
                    <h1>Metamask</h1>
                    <p> Your Access to the Decentralized Web</p>
                </span>
                <button className='login--btn' onClick={signUser}>

                    <span> Connect Your Wallet</span>
                    <FontAwesomeIcon icon={faWallet} />
                </button>
                <h1 style={{textAlign : 'center'}}> OR </h1>
                <button className='login--btn' onClick={() => navigate('/auth')}>
                    <span> Login with Email</span>
                    <FontAwesomeIcon icon={faMessage} />
                </button>

                {
                    getKey &&

                    <div className='get--key'>
                        <p className='warning--text'>
                            Warning: Never disclose your private key to unauthorized personel.

                        </p>
                        <div className='get--key--setup'>
                            <input
                                type="text"
                                className='getkey--input'
                                placeholder='Paste your private key'
                                onChange={e => setPrivatekey(e.target.value)}
                                value={`${privateKey}`}
                            />


                            <h3>use the following steps to get your key</h3>

                            <div className='key-step-desc'>
                                <p style={{ textDecoration: "underline" }}>Step I</p>
                                <p>Click on the MetaMask icon on the top left of your browser <br /> Next Click on the three dots as shown in the image below</p>
                            </div>

                            <img src="images/getkeystep1.png" alt="" className='step--img' />

                            <div className='key-step-desc'>
                                <p style={{ textDecoration: "underline" }}>Step II</p>
                                <p>Next select the account details tab</p>
                            </div>
                            <img src="images/getkeystep2.png" alt="" className='step--img' />

                            <div className='key-step-desc'>
                                <p style={{ textDecoration: "underline" }}>Step III</p>
                                <p>Next select the account details tab</p>
                            </div>
                            <img src="images/getkeystep3.png" alt="" className='step--img' />

                            <div className='key-step-desc'>
                                <p style={{ textDecoration: "underline" }}>Step IV</p>
                                <p>Next select the account details tab</p>
                            </div>
                            <img src="images/getkeystep4.png" alt="" className='step--img' />

                            <div className='key-step-desc'>
                                <p style={{ textDecoration: "underline" }}>Step V</p>
                                <p>Next select the account details tab</p>
                            </div>
                            <img src="images/getkeystep5.png" alt="" className='step--img' />

                        </div>
                    </div>
                }

            </div>
        </section>
    )
}

export default WalletLogin