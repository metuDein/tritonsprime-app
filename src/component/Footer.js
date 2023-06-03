import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useContext } from 'react'
import DataContext from '../context/DataContext'

const Footer = () => {
    const {darkmode} = useContext(DataContext); 
    return (
        <footer className='broker--footer'>
            <div className='footer--container'>
                <div className='footer--row--1'>
                    <div className='web-logo'>
                    <Link to={'/faq'} style={{color : `${darkmode ? '#000' : '#fff'}`, display: 'flex', width : '100%', textDecoration : 'none' ,alignItems:'center', justifyContent :'space-between' }}>
                    <img src={'images/finallogo.png'} className='weblogo--img'/>
                    <h1>TritonsPrime</h1>
                    </Link>
                    </div>
                    <p>
                        The ultimate destination for NFTs! We are an online marketplace dedicated to showcasing and trading unique digital assets.
                    </p>
                </div>
                <div className='footer--row--2'>
                    <h3>My Account</h3>
                    <ul>
                        <li><Link to={'/user-create'} style={{color : `${darkmode ? '#000' : '#fff'}`, textDecoration : 'none'}}>Create Item</Link></li>
                        <li><Link to={'/faq'} style={{color : `${darkmode ? '#000' : '#fff'}`, textDecoration : 'none'}}>Collection </Link></li>
                        <li><Link to={'/faq'} style={{color : `${darkmode ? '#000' : '#fff'}`, textDecoration : 'none'}}>Profile</Link></li>
                    </ul>
                </div>
                <div className='footer--row--3'>
                    <h3>Resources</h3>
                    <ul>
                        <li><Link to={'/support-request'} style={{color : `${darkmode ? '#000' : '#fff'}`, textDecoration : 'none'}}>Help Center</Link></li>
                        <li><Link to={'/profile'} style={{color : `${darkmode ? '#000' : '#fff'}`, textDecoration : 'none'}}>Activity </Link></li>
                    </ul>
                </div>
                <div className='footer--row--4'>
                    <h3>Company</h3>
                    <ul>
                        <li><Link to={'/support-request'} style={{color : `${darkmode ? '#000' : '#fff'}`, textDecoration : 'none'}}>Contact Us </Link></li>
                        <li><Link to={'/faq-who-is-tritonsprime'} style={{color : `${darkmode ? '#000' : '#fff'}`, textDecoration : 'none'}}>About</Link></li>
                        <li><Link to={'/faq-quick-answer'} style={{color : `${darkmode ? '#000' : '#fff'}`, textDecoration : 'none'}}>Faq</Link></li>
                    </ul>
                </div>
                    <div className='footer--row--5'>
                        <h3>Newsletter</h3>
                        <form className='footer--form'>
                            <input type="email" placeholder='Email'/>
                            <button>Subscribe</button>
                        </form>
                    </div>
            </div>
            <div className='footer--copyright' style={{color : `${darkmode ? '#000' : '#fff'}` }}>
                {new Date().getFullYear()} &copy; TritonsPrime
            </div>

        </footer>
    )
}

export default Footer