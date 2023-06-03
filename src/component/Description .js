import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenNib, faRocket } from "@fortawesome/free-solid-svg-icons"


const Description = () => {
    return (
        <div className='opening-desc'>
            <img src="images/finallogo.png"/>
            <h2>Welcome to TritonsPrime, the ultimate online NFT marketplace where creators and collectors unite in the world of digital assets.</h2>
            <div className="desc--btns">
                <button className='desc-btn'> Explore <FontAwesomeIcon icon={faRocket} style={{marginLeft : '5px'}}/> </button>
                <button className='desc-btn'>Create <FontAwesomeIcon icon={faPenNib} style={{marginLeft : '5px'}}/>  </button>
            </div>
        </div>
    )
}

export default Description 