import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FaFontAwesome } from 'react-icons/fa';
import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons';

const Cart = () => {
    return (
        <section className='adminusers--section'>
            
            <FontAwesomeIcon icon={faArrowAltCircleLeft} />

            <div className='collection-settings'>
                <h1 className='tab--select'> My Cart</h1>
               
            </div>

            <table className='cart--table'>
                <thead>
                    <th>image</th>
                    <th>Name</th>
                    <th>quantity</th>
                    <th>total</th>
                </thead>
                <tbody>
                    <tr className='cart--item--details'>
                        <td className='cart--item--image'><img src="https://i.seadn.io/gcs/files/e370e9c70ae235cfcdf21b4a068ab83b.png?auto=format&dpr=1&w=384" alt="" /></td>
                        <td>Doodles #100</td>
                        <td><input type="number" className='cart--item-quantity'/></td>
                        <td> $45479</td>
                    </tr>
                    <tr className='cart--subtotal'>
                        <td className='sudtotal--1'>Subtotal</td>
                       
                        <td className='sudtotal--2'> $8769 </td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}

export default Cart