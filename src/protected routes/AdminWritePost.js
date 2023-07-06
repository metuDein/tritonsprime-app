import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import axios from '../api/axios';
import useAuth from '../hook/useAuth';


const AdminWritePost = () => {
    const { setAllPosts } =  useAuth()


    const [title, setTitle] = useState('');
    const [body, setBody] = useState('')
    const [authLoading, setAuthLoading] =  useState(false);


    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }
    const handleBodyChange = (e) => {
        setBody(e.target.value)
    }

    const handleSumbitPost = async(e) => {
        e.preventDefault();

        if(!title || !body) return window.alert('all fields are required');

        try {
            setAuthLoading(true)
            const response = await axios.post('/createblogpost', JSON.stringify({ writtenBy : 'TritonsPrime Admin',  title : title, body : body}));

            if(response.status === 200){
                setAuthLoading(false);
                window.alert('Post Created');
                setTitle('')
                setBody('')
            }
        } catch (error) {
            setAuthLoading(false)
            window.alert('post creation failed')
            console.log(error)
        }
    }

  return (
    
    <section className="create-nft">
        <div>
       
        <Link to={'/admin-panel'} style={{color: '#000', background : '#fff', padding : '10px', textDecoration : 'none', borderRadius : '10px'}}> Back To panel</Link>
    </div>
            <div className='create-nft-form'>
                
                <form encType='multipart/form-data' onSubmit={handleSumbitPost}>
                    
                    <div className='nft-create-text'>
                        <label htmlFor='file-price' className='nft-create-name'>
                            Title <span></span>
                        </label>
                        <input
                            type="text"
                            id='file-price'
                            placeholder='Title'
                            onChange={handleTitleChange}
                            value={title}
                        />
                    </div>
                  
                    <div className='nft-create-text'>
                        <label htmlFor='file-description' className='nft-create-desc'>
                            <p>Body </p>
                           
                        </label>
                        <textarea
                            rows={'10'}
                            cols={'30'}
                            id='file-description'
                            placeholder='what is the post about?'
                            onChange={handleBodyChange}
                            value={body}
                            
                        />
                    </div>
                    
                    { authLoading && <button  onClick={e => e.preventDefault()}>
                <FontAwesomeIcon icon={faSpinner} spin style={{color: "#c7d2e5", fontSize : '18px'}} />
                    </button>
                    }
                    {!authLoading && <button> Post </button>}
                </form>
            </div>

        </section>
  )
}

export default AdminWritePost