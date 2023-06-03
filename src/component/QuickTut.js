import React from 'react'
import AssistCard from './AssistCard';
import { Link } from 'react-router-dom';
const QuickTut = () => {
  return (
    <section className='tut--sect'>
      <Link style={{ color: '#fff', textDecoration: "none", }}>
        <AssistCard image={'https://static.vecteezy.com/system/resources/previews/010/676/830/non_2x/3d-mobile-nft-illustration-free-png.png'} title={'What is an NFT?'} />
      </Link>
      <Link style={{ color: '#fff', textDecoration: "none", }}>

        <AssistCard image={'images/howtobuyannft.png'} title={'How to buy an NFT'} />
      </Link>
      <Link style={{ color: '#fff', textDecoration: "none", }}>

        <AssistCard image={'images/createannftontritons.png'} title={'How to create an NFT on TritonsPrime'} />
      </Link>
      <Link style={{ color: '#fff', textDecoration: "none", }}>

        <AssistCard image={'images/tprimelogo.png'} title={'Who is TritonsPrime?'} />
      </Link>
      <Link style={{ color: '#fff', textDecoration: "none", }}>

        <AssistCard image={'https://images.ctfassets.net/6g6hg01fg28j/2Jl6rjB6VwigiIU0jH07jO/4ee7b3e07cb75117c348490ca826d32f/nft-api-hero-image__2_.svg'} title={'What is Minting ?'} />
      </Link>
    </section>
  )
}

export default QuickTut