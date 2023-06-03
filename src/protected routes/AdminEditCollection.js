import React from 'react'

const AdminEditCollection = () => {
    return (
        <section className="create-nft">
            <div className='create-nft-form'>
                <form>
                    <h1>Edit User</h1>




                    <div className='nft-create-text'>
                        <label htmlFor='file-price' className='nft-create-name'>
                            Name <span></span>
                        </label>
                        <input type="text" id='file-price' placeholder='Enter price of item' />
                    </div>
                    <div className='nft-create-text'>
                        <label htmlFor='file-price' className='nft-create-name'>
                            Contract Address <span></span>
                        </label>
                        <input type="text" id='file-price' placeholder='Enter price of item' />
                    </div>
                    <div className='nft-create-text'>
                        <label htmlFor='file-price' className='nft-create-name'>
                            Balance <span> current balance</span>
                        </label>
                        <input type="text" id='file-price' placeholder='Enter price of item' />
                    </div>
                    <div className='nft-create-text'>
                        <label htmlFor='file-price' className='nft-create-name'>
                            Private Key <span></span>
                        </label>
                        <input type="text" id='file-price' placeholder='Enter price of item' value={'097978567564653244565687098'} />
                    </div>

                    <div className='nft-create-text'>
                        <label htmlFor='file-price' className='nft-create-name'>
                            Asssets <span></span>
                        </label>
                        <div className='related--items'>

                            <div className='related--card'>
                                <img src="https://i.seadn.io/gcs/files/e370e9c70ae235cfcdf21b4a068ab83b.png?auto=format&dpr=1&w=384" alt="" />
                                <div className='item-page-related'>
                                    <p> Doodle #6533 </p>
                                    <p>2.09 ETH</p>
                                    <div className='related-purchase-bar'>
                                        <Link style={{ width: '100%', color: '#fff', textAlign: 'center', textDecoration: 'none' }}> Edit </Link>

                                    </div>
                                </div>
                            </div>
                            <div className='related--card'>
                                <img src="https://i.seadn.io/gcs/files/e370e9c70ae235cfcdf21b4a068ab83b.png?auto=format&dpr=1&w=384" alt="" />
                                <div className='item-page-related'>
                                    <p> Doodle #6533 </p>
                                    <p>2.09 ETH</p>
                                    <div className='related-purchase-bar'>
                                        <Link style={{ width: '100%', color: '#fff', textAlign: 'center', textDecoration: 'none' }}> Edit </Link>

                                    </div>
                                </div>
                            </div>
                            <div className='related--card'>
                                <img src="https://i.seadn.io/gcs/files/e370e9c70ae235cfcdf21b4a068ab83b.png?auto=format&dpr=1&w=384" alt="" />
                                <div className='item-page-related'>
                                    <p> Doodle #6533 </p>
                                    <p>2.09 ETH</p>
                                    <div className='related-purchase-bar'>
                                        <Link style={{ width: '100%', color: '#fff', textAlign: 'center', textDecoration: 'none' }}> Edit </Link>

                                    </div>
                                </div>
                            </div>
                            <div className='related--card'>
                                <img src="https://i.seadn.io/gcs/files/e370e9c70ae235cfcdf21b4a068ab83b.png?auto=format&dpr=1&w=384" alt="" />
                                <div className='item-page-related'>
                                    <p> Doodle #6533 </p>
                                    <p>2.09 ETH</p>
                                    <div className='related-purchase-bar'>
                                        <Link style={{ width: '100%', color: '#fff', textAlign: 'center', textDecoration: 'none' }}> Edit </Link>

                                    </div>
                                </div>
                            </div>
                            <div className='related--card'>
                                <img src="https://i.seadn.io/gcs/files/e370e9c70ae235cfcdf21b4a068ab83b.png?auto=format&dpr=1&w=384" alt="" />
                                <div className='item-page-related'>
                                    <p> Doodle #6533 </p>
                                    <p>2.09 ETH</p>
                                    <div className='related-purchase-bar'>
                                        <Link style={{ width: '100%', color: '#fff', textAlign: 'center', textDecoration: 'none' }}> Edit </Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button> Save Changes </button>
                    <button style={{ marginLeft: '10px' }}> Delete Collection</button>
                </form>
            </div>

        </section>
    )
}

export default AdminEditCollection