import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';

const SupportRequest = () => {
  return (
    <section className="create-nft">
            <div className='create-nft-form'>
                <form>
                    <h1>Issue a Compliant </h1>
                    <small><span>*</span> required</small>
                    <div className='nft-create-text'>
                        <label htmlFor='file-name' className='nft-create-name'>
                            Account Name<span>*</span>
                        </label>
                        <input type="text" id='file-name' placeholder='User name'/>
                    </div>
                    <div className='nft-create-text'>
                        <label htmlFor='file-name' className='nft-create-name'>
                            Wallet ID<span>*</span>
                        </label>
                        <input type="text" id='file-name' placeholder='Item name'/>
                    </div>
                    <div className='nft-create-text'>
                        <label htmlFor='file-link' className='nft-create-name'>
                            <p>Asset name</p> <span> (optional)</span>
                            
                        </label>
                        <input type="text" id='file-link' placeholder='https://yoursite.io/item/123'/>
                    </div>
                    <div className='nft-create-text'>
                        <label htmlFor='file-description' className='nft-create-desc'>
                        <p>Description </p>
                        </label>
                        <textarea rows={'5'} cols={'30'} id='file-description' placeholder='please explain the issue'/>
                    </div>
                    <div className='nft-create-text'>
                        <label htmlFor='file-description' className='nft-create-desc'>
                        <p>Attachments (Optional)</p>

                        <small> Add File <input type="file" style={{display : 'none'}} /> </small>
                        </label>
                        
                    </div>
                    <div className='nft-create-text'>
                        <label htmlFor='file-blockchain' className='nft-create-desc'>
                            Blockchain
                        </label>
                        <select id='file-blockchain'>
                            <option className='network-options' value="" key="">Select Asset Network</option>
                            <option value="BNB Chain" key="">BNB Chain</option>
                            <option value="Ethereum" key="">Ethereum</option>
                        </select>

                    </div>
                    <button> Submit </button>
                </form>
            </div>

        </section>
  )
}

export default SupportRequest