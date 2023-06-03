import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const AdminPanelCard = ({ icon, title }) => {
  return (
    <Link style={{display : 'flex', flexDirection :'column' , alignItems :'center', justifyContent: 'center', textAlign : 'center', borderRadius : '10px', width :'100%'}}>
      <article className='admin-panel-card'>
        <FontAwesomeIcon icon={icon}  style={{fontSize : '70px', textAlign : 'center'}}/>
        <h1>{title}</h1>
      </article>
    </Link>
  )
}

export default AdminPanelCard