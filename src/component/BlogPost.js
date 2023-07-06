import React from 'react'
import { Link, useParams } from 'react-router-dom'
import useAuth from '../hook/useAuth'


const BlogPost = () => {

    const { id } = useParams()
    const {allPosts} = useAuth();

    const post = allPosts.find(post => post._id === id);

    const otherPost = allPosts.filter(post => post._id !== id);

    const others = (
        otherPost.slice().reverse().map((post, index) => (
            <li key={index} style={{border : '1px solid #fff', borderRadius : '5px', padding : '3px'}}> <Link to={`/blog-post/${post?._id}`} style={{ color: '#fff', padding: '10px 0' }}> {`${(post?.title).substring(0, 32)} ...`}</Link></li>
        ))
    )

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options =  {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric'
          };;
        return date.toLocaleDateString(undefined, options);
      };

    
  return (
    <main className='help--page'>
            <div className='help-sidebar'>

                <ul className='sidebar-tabs'>
                    <h2 style={{color: '#fff'}}>Other Posts</h2>
                    
                   {others}

                </ul>
            </div>

            <div className='help--article'>
                <h1 className='help--title-1' style={{ color: '#fff' }}>{post?.title}</h1>

        <p> Posted By: TritonsPrimeAdmin</p>
        <p>Posted at : {formatDate(post?.date)}</p>


                <div className='explain--nft-uses'>

                    <p>
                       {post?.body}
                    </p>
                </div>



            </div>
        </main>
  )
}

export default BlogPost