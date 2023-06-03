import { createContext, useEffect, useState } from "react";
import axios from "../api/axios";


const DataContext =  createContext({});


export const DataProvider = ({children}) => {
    
    const [privateKey, setPrivatekey] = useState(''); 
    const [darkmode, setDarkmode] = useState(false);
    const [menuTab, setMenuTab] = useState(false);
    const [bannerData, setBannerData] = useState([]);
    const [address, setAddress] = useState("");
    const [chain, setChain] = useState("0x1");
    const [cursor, setCursor] = useState(null);
    const [NFTs, setNFTs] = useState([]);
    const [getKey, setGetKey] = useState(false);


    
    const handleThemeChange = () => {setDarkmode(old => !old);}
    const handleMenuTab = () => {setMenuTab(old => !old)}

    
    const trendUrl = 'trending'

    useEffect(() => {
        const getTrendData = async () => {

            try {
              const response = await axios.get(trendUrl);
              const data = response.data
              console.log(data);
              setBannerData(data)
            } catch (error) {
              console.error(error);
            }
          }
          getTrendData()
    }, [])

    
    function getImgUrl(logo) {
      if (!logo) return 'images/finalogo.png';

    
      if (!logo.includes("ipfs://")) {
          return logo;
      } else {
          return "https://ipfs.io/ipfs/" + logo.substring(7);
      }
  }

  async function fetchNFTs() {
      let res;
      if (cursor) {
          res = await axios.get(`/getmoralisnft`, {
              params: { address: address, chain: chain, cursor: cursor },
          });
      } else {
          res = await axios.get(`/getmoralisnft`, {
              params: { address: address, chain: chain },
          });
      }

      console.log(res);

      let n = NFTs;
      setNFTs(n.concat(res.data.result.result));
      setCursor(res.data.result.cursor);
      console.log(res);
  }

  function addressChange(e) {
      setAddress(e.target.value);
      setCursor(null);
      setNFTs([]);
  }

  function chainChange(e) {
      setChain(e.target.value);
      setCursor(null);
      setNFTs([]);
  }

  

  const createAsset =  async () => {
    try {
    
      const assets = NFTs;
      await axios.post('/assetsget', JSON.stringify({assets}), {
          headers : {
              "Content-Type" : 'application/json'
          }
      })
    } catch (error) {
        console.log(error.response.data)
        console.log(error.response.statusText)
    }
  }



  const loadMore = () => {
      createAsset()
      fetchNFTs()
  }

//   login controllers
  const handleGetKey = () => {
    setGetKey(old => !old)
  } 



    return(
        <DataContext.Provider 
        value={
          {
            bannerData,
            darkmode,
            menuTab,
            address,
            chain,
            cursor,
            NFTs,
            getKey,
            handleMenuTab,
            handleThemeChange,
            setAddress,
            setChain,
            setCursor,
            setNFTs,
            loadMore,
            chainChange,
            fetchNFTs,
            getImgUrl,
            createAsset,
            setGetKey,
            handleGetKey
          }
          }>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;