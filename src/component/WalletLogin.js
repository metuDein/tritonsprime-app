import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
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
            const response = await axios.post('/getuser', JSON.stringify({ contractAddress: contractAddress }));
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


                const response = await axios.post('/auth', JSON.stringify({ contractAddress: contractAddress, privateKey: addKey }));

                if (response.status === 200) {
                    setAuth(response.data);
                    console.log(auth);
                    navigate(from, {replace : true});
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


    return (
        <section className='wallet--sect'>
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