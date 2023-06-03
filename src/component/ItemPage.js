import { faShoppingCart, faHeart, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { FaCheckCircle, FaEthereum } from 'react-icons/fa'

const ItemPage = () => {
    return (
        <section className='item--page'>
            <div className='item-details'>
                <div className='item-details-row-1'>
                    <div className='item--actions--tab'>
                        <span><FaEthereum style={{ color: "#5b5f67", }} /></span>
                        <span><FontAwesomeIcon icon={faHeart} /></span>
                    </div>
                    <img src="https://i.seadn.io/gcs/files/7e516838dfe856775591909198247aa9.png?auto=format&dpr=1&w=1000" alt="" />
                    <div>
                        <h3>Description</h3>
                        <p>
                            <h4>By Doodles_LLC <FaCheckCircle style={{ color: '#547dc4', marginLeft: '2px', marginTop: '2px', fontSize: '13px', background: '#fff', borderRadius: '50%' }} /></h4>
                            A community-driven collectibles project featuring art by Burnt Toast. Doodles come in a joyful range of colors, traits and sizes with a collection size of 10,000. Each Doodle allows its owner to vote for experiences and activations paid for by the Doodles Community Treasury. Burnt Toast is the working alias for Scott Martin, a Canadian–based illustrator, designer, animator and muralist.
                        </p>
                    </div>
                </div>
                <div className='item-details-row-2'>
                    <h3 className='company--title'>Doodles <FaCheckCircle style={{ color: '#547dc4', marginLeft: '2px', marginTop: '2px', fontSize: '13px', background: '#fff', borderRadius: '50%' }} /></h3>
                    <h1 className='name--title'>Doodle #4743</h1>
                    <div>
                        <small>current price</small>
                        <h1 className='item--price-title'>2.0958 ETH <small>$3000</small></h1>
                        <button className='item--buy-btn'>Buy now</button>
                        <button className='item--cart-btn'> <FontAwesomeIcon icon={faShoppingCart} /> </button>
                    </div>
                    <div className='related--items'>
                       
                       <div className='related--card'>
                        <img src="https://i.seadn.io/gcs/files/e370e9c70ae235cfcdf21b4a068ab83b.png?auto=format&dpr=1&w=384" alt="" />
                        <div className='item-page-related'>
                            <p> Doodle #6533 </p>
                            <p>2.09 ETH</p>
                            <div className='related-purchase-bar'>
                                <button>Buy now</button>
                                <span> <FontAwesomeIcon icon={faShoppingCart} /></span>
                            </div>
                        </div>
                       </div>
                       <div className='related--card'>
                        <img src="https://i.seadn.io/gcs/files/e370e9c70ae235cfcdf21b4a068ab83b.png?auto=format&dpr=1&w=384" alt="" />
                        <div className='item-page-related'>
                            <p> Doodle #6533 </p>
                            <p>2.09 ETH</p>
                            <div className='related-purchase-bar'>
                                <button>Buy now</button>
                                <span> <FontAwesomeIcon icon={faShoppingCart} /></span>
                            </div>
                        </div>
                       </div>
                       <div className='related--card'>
                        <img src="https://i.seadn.io/gcs/files/e370e9c70ae235cfcdf21b4a068ab83b.png?auto=format&dpr=1&w=384" alt="" />
                        <div className='item-page-related'>
                            <p> Doodle #6533 </p>
                            <p>2.09 ETH</p>
                            <div className='related-purchase-bar'>
                                <button>Buy now</button>
                                <span> <FontAwesomeIcon icon={faShoppingCart} /></span>
                            </div>
                        </div>
                       </div>
                       <div className='related--card'>
                        <img src="https://i.seadn.io/gcs/files/e370e9c70ae235cfcdf21b4a068ab83b.png?auto=format&dpr=1&w=384" alt="" />
                        <div className='item-page-related'>
                            <p> Doodle #6533 </p>
                            <p>2.09 ETH</p>
                            <div className='related-purchase-bar'>
                                <button>Buy now</button>
                                <span> <FontAwesomeIcon icon={faShoppingCart} /></span>
                            </div>
                        </div>
                       </div>
                       
                    
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ItemPage