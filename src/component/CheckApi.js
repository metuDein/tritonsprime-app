import { useEffect, useState } from "react";
import axios from '../api/axios';
import NftCard from "./NftCard";
import Slider from "./Slider";
import AnimateTab from "./AnimateTab";

const CheckApi = ({bannerData}) => {

 
  const url = 'homepagenft'
  const [data, setData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {

      try {
        const response = await axios.get(url);
        const data = response.data
        console.log(data);
        setData(data)
      } catch (error) {
        console.error(error);
      }
    }
   
    fetchData();

  }, []);


  return (
      <NftCard data={data} />
   
  )
}

export default CheckApi