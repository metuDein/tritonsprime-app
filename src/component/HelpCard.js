import React from 'react';

const HelpCard = ({ title, body, src}) => {
  return (
    <article className='help--card'>
    <img className='help--tab--img' src={src} alt="metamask" />

    <h2>{title}</h2>
    <p>{body}</p>
</article>
  )
}

export default HelpCard