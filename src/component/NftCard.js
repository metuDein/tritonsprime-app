
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FaCheckCircle } from 'react-icons/fa';
import { useContext } from 'react';
import DataContext from '../context/DataContext';
import { Link } from 'react-router-dom';




const NftCard = ({ data }) => {

  const { setAddress, setNFTs} = useContext(DataContext);

  const refreshCollectionData = (data) => {
    setAddress(data)
    setNFTs([])
  }


  const getNft = (
    data.map(item => (
      <Link to={`/collection/${item.contractAddress}`} onClick={() => refreshCollectionData(item.contractAddress)} style={{width : '100%', color : '#000', textDecoration : 'none'}}>
        <article key={item._id} className='nfts--card' >
          <img src={item.logo} alt='nft icons' />
          <div className='nft--desc'>
            <h3 className='nft--title'>  {`${(item.name).length > 15 ? `${(item.name).substring(0, 10)}...` : item.name}`} <FaCheckCircle style={{ color: '#547dc4', marginLeft: '5px', fontSize: '13px' }} /> </h3>
            <div className='nft--price'>
              <h3>{item.floorPrice} ETH</h3>
              <h3>${Math.floor(item.floorPriceUsd)}</h3>
            </div>
          </div>
        </article>
      </Link>
    ))
  )



  return (
    <section className='nft--tabs'>
      {getNft}
      {/* <Nfts data={data} /> */}
    </section>
  )
}

export default NftCard