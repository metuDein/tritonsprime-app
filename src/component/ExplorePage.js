import React, { useEffect, useState, useContext} from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import axios from '../api/axios';
import DataContext from '../context/DataContext';
import ExploreCard from './ExploreCard';


const ExplorePage = () => {

  const {allAssets} = useContext(DataContext)

  // const [allAssets, setAllAssets] = useState([]);
  const [allCollections, setAllCollections] = useState([]);

  const [searchWeb, setSearchWeb] = useState('');
  const [displayData, setDisplayData] = useState([]);


 

 

  


  return (
    <section className='explore--page'>

      <ExploreCard displayData={allAssets}/>

             
              
    </section>
  )
}

export default ExplorePage