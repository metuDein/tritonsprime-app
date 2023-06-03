import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const CreateNft = () => {
    return (
        <section className="create-nft">
            <div className='create-nft-form'>
                <form>
                    <h1>Create New Item</h1>
                    <small><span>*</span> required</small>
                    <p>Image, Video, Audio, or 3D Model</p>
                    <small>File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB</small>
                    <label htmlFor='file-upload' className='file-upload'>
                        <span className='upload-overlay'> </span>
                        <input type="file" id='file-upload' />
                        <span className='upload-screen-read'><FontAwesomeIcon icon={faImage} style={{ fontSize: '70px' }} beat /><img src="" alt="" style={{ zIndex: '10', objectFit: 'contain' }} /></span>
                    </label>
                    <div className='nft-create-text'>
                        <label htmlFor='file-name' className='nft-create-name'>
                            Name <span>*</span>
                        </label>
                        <input type="text" id='file-name' placeholder='Item name'/>
                    </div>
                    <div className='nft-create-text'>
                        <label htmlFor='file-link' className='nft-create-name'>
                            <p>External Link</p> <span></span>
                            <small>TritonsPrime will include a link to this URL on this item's detail page, so that users can click to learn more about it. You are welcome to link to your own webpage with more details.</small>
                        </label>
                        <input type="text" id='file-link' placeholder='https://yoursite.io/item/123'/>
                    </div>
                    <div className='nft-create-text'>
                        <label htmlFor='file-price' className='nft-create-name'>
                            Price <span>USD</span>
                        </label>
                        <input type="text" id='file-price' placeholder='Enter price of item'/>
                    </div>
                    <div className='nft-create-text'>
                        <label htmlFor='file-description' className='nft-create-desc'>
                        <p>Description </p>
                        <small>The description will be included on the item's detail page. </small>
                        </label>
                        <textarea rows={'3'} cols={'30'} id='file-description' placeholder='Provide a detailed description of your item'/>
                    </div>
                    <div className='nft-create-text'>
                        <label htmlFor='file-quantity' className='nft-create-name'>
                            <p>Supply</p>
                            <small>The number of items that can be minted.</small>
                        </label>
                        <input type="text" id='file-price' placeholder='Enter price of item'/>
                    </div>
                    <div className='nft-create-text'>
                        <label htmlFor='file-blockchain' className='nft-create-desc'>
                            Blockchain
                        </label>
                        <select id='file-blockchain'>
                            <option className='network-options' value="" key="">Select a network</option>
                            <option value="BNB Chain" key="">BNB Chain</option>
                            <option value="Ethereum" key="">Ethereum</option>
                        </select>

                    </div>
                    <button> Create </button>
                </form>
            </div>

        </section>
    )
}

export default CreateNft