import React from 'react'
import AdminPanelCard from './AdminPanelCard'
import { faGears, faUsersGear, faFolderOpen, faPenToSquare} from '@fortawesome/free-solid-svg-icons'

const AdminPanel = () => {
    return (
        <section>
            <div className='admin-panel'>
                <AdminPanelCard title={'user settings'} icon={faUsersGear}/>
                <AdminPanelCard title={'Admin settings'} icon={faGears}/>
                <AdminPanelCard title={'Collections'} icon={faFolderOpen}/>
                <AdminPanelCard title={'Edit Assets'} icon={faPenToSquare}/>
            </div>
        </section>
    )
}

export default AdminPanel