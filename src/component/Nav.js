import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser, faMagnifyingGlass, faWallet, faArrowRightFromBracket, faGear, faFolder, faPenNib, faCloudMoon } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


import { useContext } from 'react';
import DataContext from '../context/DataContext';
import useAuth from '../hook/useAuth';

const Nav = () => {
  const { handleThemeChange, menuTab, handleMenuTab, darkmode } = useContext(DataContext);
  const {auth} = useAuth()


  return (
    <header className='broker-navbar'>
      <div className='web-logo nav'>
      <Link to={'/'} style={{color : `${darkmode ? '#000' : '#fff'}`, display: 'flex', width : '100%', textDecoration : 'none' ,alignItems:'center', justifyContent :'space-between' }}>
        <img src={`images/finallogo.png`} />
        <h1>TritonsPrime</h1>
        </Link>
      </div>
      <form className='nav--form'>
        <input
          type="text"
          placeholder='Search for Assets or Contract Address'
        />
        <span className='magnifying--glass'>
          <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: '#000' }} />
        </span>
      </form>
      {auth && <span> {`Balance : ${ auth.balance } USD`} </span>}
      <div className='connect-wallet' >
        <h3><span style={{ marginRight: '3px' }}><FontAwesomeIcon icon={faWallet} /></span> <Link to={'/walletlogin'} style={{color  : '#fff', textDecoration : 'none'}}>  Connect your wallet </Link> </h3>
        <FontAwesomeIcon icon={faUser} style={{ marginLeft: '8px', borderRadius: '50%', border: '1px solid #777', padding: '3px', width: '15px', height: '15px', fontSize: '14px' }}  onClick={handleMenuTab}/>
        <ul className={`nav-dropdown ${menuTab ? 'active' : ''}`}>
          <li><Link style={{color : '#fff', textDecoration : 'none'}} ><FontAwesomeIcon icon={faUser} style={{ marginRight: '8px',  fontSize: '14px' }} />Profile </Link></li>
          <li><Link style={{color : '#fff', textDecoration : 'none'}} ><FontAwesomeIcon icon={faFolder} style={{ marginRight: '8px', fontSize: '14px' }} /> My collection </Link></li>
          <li><Link style={{color : '#fff', textDecoration : 'none'}} ><FontAwesomeIcon icon={faPenNib} style={{marginRight : '8px',  fontSize: '14px'}}/> Create </Link></li>
          <li><Link style={{color : '#fff', textDecoration : 'none'}} ><FontAwesomeIcon icon={faPenNib} style={{marginRight : '8px',  fontSize: '14px'}}/> Create </Link></li>
          <li><Link style={{color : '#fff', textDecoration : 'none'}} ><FontAwesomeIcon icon={faGear} style={{ marginRight: '8px', fontSize: '14px' }} /> Settings </Link></li>
          <li><FontAwesomeIcon icon={faCloudMoon} style={{ marginRight: '8px', fontSize: '14px' }} /> <span onClick={handleMenuTab}>Dark mode</span> <span className={`darkmode ${darkmode ? 'active' : ''}`} onClick={handleThemeChange}> <span className={`darkmodeAction ${darkmode ? 'active' : ''}`} onClick={handleThemeChange}></span></span> </li>
          <li><Link style={{color : '#fff', textDecoration : 'none'}} ><FontAwesomeIcon icon={faArrowRightFromBracket} style={{ marginRight: '8px', fontSize: '14px' }} />  Log Out </Link></li>
        </ul>
      </div>
      <div>
        <FontAwesomeIcon icon={faShoppingCart} style={{ border: '1px solid #777', borderRadius: '10px', padding: '8px 10px' }} />
      </div>
      <div>
      </div>
    </header>
  )
}

export default Nav