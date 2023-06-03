import axios from '../api/axios';
import {useState, useEffect} from 'react'

const useAxiosFetch = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [fetchError, setFetchError] = useState(null)

  useEffect( () => {

    const fetchData = () =>{
        let isMount = true;

        try {
            const response = axios.get()
            
        } catch (error) {
            
        }
    }
  }, [])
    
}

