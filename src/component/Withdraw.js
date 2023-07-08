import React, { useState } from 'react'
import { FaEthereum } from 'react-icons/fa'
import axios from '../api/axios'
import useAuth from '../hook/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Withdraw = () => {
  const { auth, allCashier } = useAuth()

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


  const withdrawals = allCashier.filter( cash => cash.cashierType === 'Withdraw' && cash.madeBy === auth?.user?.userName)
 
  const [amount, setAmount] = useState('')
  const [authLoading, setAuthLoading] = useState(false);
  const userBalance = auth?.user?.balance;


  const recents = (
     withdrawals.slice().reverse().map( (item, index) => (
      <tr key={index}>
    <td> {item?.amount} <FaEthereum/> </td>
    <td>{item?.status} </td>
    <td> {formatDate(item?.date)}</td>
</tr>
     ))
  )
  
  
  const handleWithDraw = async (e) => {
    
    e.preventDefault();

    setAuthLoading(true)
    if( userBalance < Number(amount) ){
      setAuthLoading(false);

    return window.alert('your balance is too low to withdraw');
    }
    if(!auth?.user?.contractAddress) {
      setAuthLoading(false);

      return window.alert('please connect your wallet');
    }

    try {
      const response = await axios.post('/cashier', JSON.stringify({ username : auth?.user?.userName, type : 'Withdraw', amount : amount }));

      if(response.status === 200){
                
        const response = await axios.post('/supportrequest', JSON.stringify({  title : "Withdrawal", body : `Withdrawal of ${amount} ETH was requested by ${auth?.user?.userName} please check for confirmation, approve the withdrawal and update the user's balance`,  sendername : auth?.user?.userName}));
        
        if(response.status === 200) {
            
            setAuthLoading(false)
            window.alert('your withdrawal request has been made and is currently waiting approval.')
            return 
        }
        
    }
      
    } catch (error) {
      console.log(error.response.data)
      console.log(error.response.status)
      setAuthLoading(false)
    }

  }

  return (
    <section className='deposit--sect'>
    <div className='connect--wallet'>
        <form className='email--login' onSubmit={handleWithDraw}>
        <div className='nft-create-text'>
                    <label htmlFor='file-name' className='nft-create-name'>
                        Withdraw Amount
                    </label>
                    <input
                        type="number"
                        name='nftName'
                        id='file-name'
                        placeholder='Withdrawal Amount'
                        value={amount}
                        onChange={e => setAmount(e.target.value)}

                    />
                </div>
                {authLoading && <button className='deposit--btn' onClick={e => e.preventDefault()}>  <FontAwesomeIcon icon={faSpinner} spin style={{ color: "#c7d2e5", fontSize: '18px' }} /> </button>}
                       {!authLoading && <button className='deposit--btn'> Withdraw </button>}
                
        </form>
    </div>

    <table className='cart--table'>
    <thead>
        <th>Withdraw</th>
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

export default Withdraw