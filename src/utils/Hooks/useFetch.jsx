import { useState, useEffect } from 'react'


function UseFetch(URL) {

  const [data, setData] = useState([])  
  const [isDataLoading, setDataLoading] = useState(false)
  const [error, setError] = useState(false)
    
  useEffect(() => {
    async function getData() {     
      setDataLoading(true)
        
      try {
        await fetch( URL ,{ headers : { 'Content-Type': 'application/json', 'Accept': 'application/json' } } )
        .then(function(response){    
          return response.json();
        })        
        .then(function(data) {                 
          setData(data)          
        });      
      }
      catch (err) {
        console.log(err)
        setError(true)
      }           
    }
    getData()
  }, [URL])

  return data 
}

export default UseFetch
