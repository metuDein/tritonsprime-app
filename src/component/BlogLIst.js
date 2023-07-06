import {useState} from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../hook/useAuth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import axios from '../api/axios';

const BlogLIst = () => {
    const {auth, allPosts} = useAuth();

    const [reviewMessage, setReviewMessage] = useState('')
    const [authLoading, setAuthLoading ] = useState(false);

    const posts = (
        allPosts.slice().reverse().map((post, index) => (
            <Link key={index} to={`/blog-post/${post?._id}`} style={{ flexBasis : '33%', flexShrink : '0'}}>
                    <h1 className='preview--title'>{`${(post?.title).substring(0, 36)}...`}</h1>
                    <p className='preview--body'>{`${(post?.body).substring(0, 32)} ....Read More`} </p>
                </Link>
        ))
    )
    
    const allPost = (
        allPosts.slice().reverse().map((post, index) => (
<Link to={`/blog-post/${post?._id}`} key={index} style={{border : '1px solid #777', borderRadius : '5px'}}>
                    <h1 className='preview--title'>{post?.title}</h1>
                    <p className='preview--body list'>
                    {`${(post?.body).substring(0, 402)} .....Read More`} 
                    </p>
                </Link>
        ))
    )

    const submitReview = async (e) => {
        e.preventDefault()

        if (!auth?.user) return window.alert('Please Login');
        if (!reviewMessage) return window.alert('all fields required');

        try {
            setAuthLoading(true);
            const response = await axios.post('/writereview', JSON.stringify({ reviewMessage : reviewMessage, writtenBy : auth?.user?.userName }))

            if(response.status  === 200) {
                setAuthLoading(false)
                window.alert('Review Submitted');
                setReviewMessage('');
                return
            }
            
        } catch (error) {
            console.log(error.response);
            console.log(error.status);
            setAuthLoading(false)

        }
    }
    
    return (
        <section className='blog-page'>
            <h1 className='blog--page--title'>Welcome to Tritonsprime Blog</h1>
            <h2 className='recent--title'>Recent Posts</h2>
            <div className='recent--posts'>
                {posts}
               
                
            </div>

            <h1 className='recent--title'>More Posts</h1>
            <div className='more--post'>
               {allPost}
            </div>

            <div className='write-review'>
                <h1>Write a review</h1>
                <form onSubmit={submitReview}>
                <div className='nft-create-text'>
                        {/* <label htmlFor='file-description' className='nft-create-desc'>
                            <p>Message </p>
                           
                        </label> */}
                        <textarea
                            rows={'10'}
                            cols={'20'}
                            id='file-description'
                            placeholder='write a quick review'
                            onChange={e => setReviewMessage(e.target.value)}
                            value={reviewMessage}
                            
                        />
                    </div>
                    {!authLoading && <button className='login--btn'> Submit </button>}
                    {authLoading && <button className='login--btn' onClick={e => e.preventDefault()}> <FontAwesomeIcon icon={faSpinner} spin style={{ fontSize : '18px'}} /> </button>}
                </form>
            </div>
        </section>
    )
}

export default BlogLIst