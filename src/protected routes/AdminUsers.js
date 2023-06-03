import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const AdminUsers = () => {
    return (
        <section className='adminusers--section'>
            <div> 
                <span>Total users  : 100 </span> 
                <button> View All users</button>
            </div>
            <div className='collection-settings'>
                <span className='tab--select active'> Users</span>
                <form>
                    <span><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
                    <input type="text" className='collection--search' placeholder='find a user'/>
                </form>
            </div>

            <table className='data--table'>
                <thead>
                    <th>Name</th>
                    <th>total Assets</th>
                    <th>Balance</th>
                    <th>purchases</th>
                </thead>
                <tbody>
                    <tr className='table--row'>
                        <div className='row--hover'>
                            <Link style={{textDecoration  : 'none', background : "blue", color : '#fff', padding : '5px 30px', borderRadius: '5px'}}> Edit </Link>
                        </div>
                        <td>max</td>
                        <td>20</td>
                        <td>$50</td>
                        <td>5</td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}

export default AdminUsers