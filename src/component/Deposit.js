import React, { useState } from 'react'
import { FaEthereum } from 'react-icons/fa'
import axios from '../api/axios';
import useAuth from '../hook/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faRotate } from '@fortawesome/free-solid-svg-icons';


const Deposit = () => {
    const { auth, allCashier } = useAuth();
    
    const [deposit, setDeposit] = useState('');
    const [authLoading, setAuthLoading] = useState(false);
    const [activeDepo, setActiveDepo] = useState(false);

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


      const deposits = allCashier.filter( cash => cash.cashierType === 'Deposit' && cash.madeBy === auth?.user?.userName)

      const recents = (
        deposits.slice().reverse().map( (item, index) => (
         <tr key={index}>
       <td> {item?.amount} <FaEthereum/> </td>
       <td>{item?.status} </td>
       <td> {formatDate(item?.date)}</td>
   </tr>
        ))
     )

    const handleDeposit = async(e) => {

        e.preventDefault();

        if (!deposit || deposit === '') return window.alert('deposit amount required');

        try {
            setAuthLoading(true)
            const response = await axios.post('/cashier', JSON.stringify({ username : auth?.user?.userName, type : 'Deposit', amount : deposit }));


            if(response.status === 200){
                
                const response = await axios.post('/supportrequest', JSON.stringify({  title : "Deposit", body : `deposit of ${deposit} ETH was requested by ${auth?.user?.userName} to this address ${'0x6ab4d01693Caf57441eee45AC3969dE53fe531b2'} please check for confirmation and update the user balance`,  sendername : auth?.user?.userName}));
                
                if(response.status === 200) {
                    
                    setAuthLoading(false)
                    setActiveDepo(true)
                    return 
                }
                
            }
            console.log(response.data)
            console.log(response.data)
            
        } catch (error) {
            console.log(error.response.status);
            console.log(error.response.message);
            setAuthLoading(false)
        }
        
    }
  return (
    <section className='deposit--sect'>
            <div className='connect--wallet deposit'>
                <form className='email--login' onSubmit={handleDeposit}>
                <div className='nft-create-text'>
                            <label htmlFor='file-amount' className='nft-create-name'>
                                Deposit Amount
                            </label>
                            <input
                                type="number"
                                name='nftName'
                                id='file-amount'
                                placeholder='Deposit Amount'
                                onChange={e => setDeposit(e.target.value)}
                                value={deposit}
                            />
                        </div>
                        {authLoading && <button className='deposit--btn' onClick={e => e.preventDefault()}>  <FontAwesomeIcon icon={faSpinner} spin style={{ color: "#c7d2e5", fontSize: '18px' }} /> </button>}
                       {!authLoading && <button className='deposit--btn'> deposit </button>}
                </form>

                { activeDepo && <div className='deposit--status'>
                <article className='transaction-failed'>
                        <h1>0x6ab4d01693Caf57441eee45AC3969dE53fe531b2 </h1>
                        <h1> please make your deposit of    <span style={{fontSize : '19px', fontWeight : '500'}}>  {deposit} <FaEthereum /> ETH  </span>to the above address. it takes 
                        15 minutes for full confirmation 
                        </h1>
                        <span style={{ margin: '30px 0' }}><FontAwesomeIcon icon={faRotate} style={{ fontSize: '100px' }} spin /></span>
                        <span > </span>
                    </article>
                </div>}
            </div>

            <table className='cart--table'>
            <thead>
                <th>Deposit</th>
                <th>status</th>
                <th>Date</th>
            </thead>
            <tbody>
            {recents}
                
            </tbody>
            </table>
        </section>
  )
}

export default Deposit