import React, { useState } from 'react'

const CurrencyInfo = () => {
    const [data, setData] =  useState({})
  
   useEffect(( currency) => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
     .then(res => res.json())
     .then(res => setData(res[currency]))
     console.log(data);
     
   }, [currency])

   console.log(data);
   return data
   
  
}

export default CurrencyInfo
