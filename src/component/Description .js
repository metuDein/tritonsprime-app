import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenNib, faRocket } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"


const Description = () => {
    return (
        <div className='opening-desc'>
            <img src="images/finallogo.png"/>
            <h1>Welcome to TritonsPrime</h1>
            <p>the ultimate online NFT marketplace where creators and collectors unite in the world of digital assets.</p>
            <div className="desc--btns">
                <button className='desc-btn'> <Link to={'/explore'} style={{color  :'#000', textDecoration :'none'}}>Explore <FontAwesomeIcon icon={faRocket} style={{marginLeft : '5px'}}/> </Link> </button>
                <button className='desc-btn'>
                <Link to={'/user-create'} style={{color  :'#000', textDecoration :'none'}}> Create <FontAwesomeIcon icon={faPenNib} style={{marginLeft : '5px'}}/> </Link> </button>
            </div>
        </div>
    )
}

export default Description 