import AssistCard from './AssistCard'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import DataContext from '../context/DataContext'


const Faqs = () => {

    const { darkmode }  = useContext(DataContext)
  return (
    <section className='faq--card--sect'>
        <Link to={'/faq-what-is-an-nft'} style={{color : `${darkmode ? '#000' : '#fff'}`, textDecoration : 'none', textAlign : 'center'}}>
            <AssistCard image={'https://opensea.io/static/images/learn-center//what-is-nft.png'} title={'What is an NFT?'}/>
        </Link>
        <Link to={'/faq-how-to-buy-an-nft'} style={{color : `${darkmode ? '#000' : '#fff'}`, textDecoration : 'none', textAlign : 'center'}}>
            <AssistCard image={'https://opensea.io/static/images/learn-center//how-to-buy-nft.png'} title={'How to buy an NFT?'}/>
        </Link>
        <Link to={'/faq-how-to-create-an-nft'} style={{color : `${darkmode ? '#000' : '#fff'}`, textDecoration : 'none', textAlign : 'center'}}>
            <AssistCard image={'images/createannftontritons.png'} title={'how to create an NFT?'}/>
        </Link>
        <Link to={'/faq-who-is-tritonsprime'} style={{color : `${darkmode ? '#000' : '#fff'}`, textDecoration : 'none', textAlign : 'center'}}>
            <AssistCard image={'images/tprimelogo.png'} title={'Who is TritonsPrime?'}/>
        </Link>

        <Link style={{margin : '0 auto', padding : '10px 20px', borderRadius : '10px', textDecoration : 'none', background : "blue", color : "#fff"}}> Contact Us</Link>   
        
    </section>
  )
}

export default Faqs