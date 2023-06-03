import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link, useParams} from 'react-router-dom'
import { faPencil, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import axios from '../api/axios'

const Profile = () => {

    const { id } = useParams();
    

    const  user = async (id) => {
        const response = await axios.get('/', JSON.stringify({id : id}));

        return
        
        
    }    








  return (
    <section className='profile-section'>
        <div className='profile--banner'>
            <img src="" alt="" className='profile-pic'/>
            <span><FontAwesomeIcon icon={faPencil} /></span>
        </div>
        <div className='profile-desc'>
            <h1>Max Dein</h1>
            <div className='profile--details'>
                <span>wallet Address <span style={{marginLeft : '9px'}}>Joined-{new Date().getFullYear()}</span></span>
                <span>tamarazoke dein</span>
            </div>
        </div>
    <div className='user-collections'>

        <div className='collection-settings'>
            <span className='tab--select active'> Collected</span>
            <span  className='tab--select '>Created</span>
            <form> 
                <span><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
                <input type="text" className='collection--search'/>
            </form>
        </div>
        
        <table className='data--table'>
            <thead>
                <th>Name</th>
                <th>Quantiy</th>
                <th>Price per item</th>
                <th>Date purchased</th>
                <th>BlockChain</th>
            </thead>
            <tbody>
                <tr key="">
                    <td>tax</td>
                    <td>20</td>
                    <td>0.5 ETH</td>
                    <td>{new Date().getFullYear()}</td>
                    <td>Ethereum</td>
                </tr>
            </tbody>
        </table>
    </div>
    </section>
  )
}

export default Profile