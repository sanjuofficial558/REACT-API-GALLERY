import { useEffect, useState } from 'react'
import axios from "axios"

function useImage() {
    const [isLoading, setIsLoading] = useState(true);
    const [apiData, setApiData] = useState([]);

    async function fetchImg(){
        // data downloading from API
      const data = await axios.get("https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20")
      // console.log(data);
      // const data = await resp;
  
      // data filter
      const filterData = data.data.photos.map((value) =>{
        const apiObject = {
          id: value.id,
          name:  value.title,
          desc: value.description,
          url: value.url,
        }
        return apiObject;
      })
  
    //   set filter data in variable
      setApiData(filterData)
      setIsLoading(false)
      // console.log(apiData);
    }
  
    useEffect(()=>{
      fetchImg()
    }, [])

    return {isLoading, apiData }
}

export default useImage