import React from 'react'
import DataContext from '../context/DataContext';
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

import useAuth from '../hook/useAuth';
import { FaEthereum } from 'react-icons/fa';


const ExploreCard = ({displayData}) => {

    const navigate = useNavigate();

    const {getImgUrl, addToCart, cartItemQuantity, setCartItemQuantity} = useContext(DataContext);
    const {auth} = useAuth()

    const {user} = auth

    const handleCartWork = (id, userAddress, quantity, price, image, name, username) => {


        if(!user.contractAddress) return navigate('/walletlogin')
        addToCart(id, userAddress, quantity, price, image, name, username)
    }
    


    const assets = (
        displayData.slice().reverse().map((item, index) => (
            <article className='collection--card' style={{color : '#fff', background : '#fff'}} >
                <Link to={`/itempage/${item._id}`} key={index} style={{color : '#000', textDecoration : 'none'}}>
                        <img src={getImgUrl(item.image)} alt="nft card img" />
                        <h2>{`${item.name}`}</h2>
                        <div className='collection--desc'>
                            <h3 style={{textAlign : 'center'}}>{item.price} <FaEthereum /> </h3>
                            <span className='category'> {(item.categories).toUpperCase()} </span> 
                        </div>
                </Link>
                        <div className='collection--purchase--bar'>
                            
                            <button> <Link to={`/itempage/${item._id}`}> Buy Now</Link></button> 
                            <span>
                                <FontAwesomeIcon onClick={() => addToCart(item._id, user?.contractAddress, cartItemQuantity, item.price, item.image, item.name, item?.OwnerName)} icon={faCartPlus} />
                            </span>
                        </div>
                    </article>

        ))
    )

  return assets
}

export default ExploreCard