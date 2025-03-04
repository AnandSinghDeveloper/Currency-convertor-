import React, { useEffect } from 'react'
import  CurrencyInfo  from "./Hooks/CurrencyInfo";
import { useState } from 'react';


const Home = ({ 
  currencyOptions=[],
  amountDisabled=false,
  currenctdisabled=false
  }) => {


    const [onCurrencyChange, setOnCurrencyChange] =useState(null) 
    const [onAmountChange, setonAmountChange] = useState(null)
    const [convertedValue, setConvertedValue]=useState(Number)
    

    const [currency, setCurrency] = useState('inr')
    const data = CurrencyInfo(currency)
    const [finaldata, setFinaldata]=useState(null) 

        currencyOptions = Object.keys(data)
          
       const Answer=()=>{
       
          setConvertedValue(data[onCurrencyChange]) 
        setFinaldata(onAmountChange*convertedValue)

        
       } 
   
        

    const submithandler = (e) => {
      e.preventDefault()
     
    }
    
  return (
    <div class= "flex justify-center items-center h-screen bg-[url('https://plus.unsplash.com/premium_photo-1681437744904-d815bc19c2f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-repeat-no ">
      
      <form onSubmit={(e) => submithandler(e)  } >
      <div class= "container w-[50vw] h-[55vh] border-white border backdrop-blur-sm shadow-lg bg-transparent rounded-xl flex flex-col justify-center gap-7 items-center  ">


<div class= " w-[80%] h-[30%] bg-white rounded-lg flex flex-row justify-between p-3 ">
  <div>
  <h3 class= "font-medium text-xl text-gray-400">To</h3>
  <input class= "w-[100%] h-[50%] border border-gray-300 rounded-lg mt-3 outline-none px-3 " type="Number" placeholder="0.00" disabled ={amountDisabled} value={onAmountChange} onChange={(e) => setonAmountChange(e.target.value ) } />
  </div>
  <div>
    <h3 class= "font-medium text-xl text-gray-400">Currency Type</h3>
    <select class= "w-[100%] h-[50%]  bg-gray-100 rounded-lg mt-3 outline-none px-3 " name="currency" value={onCurrencyChange} onChange={(e) =>{ setOnCurrencyChange(e.target.value)}  } 
      disabled={currenctdisabled}>
      
      {
        currencyOptions.map((Currency,idx) => (
          <option key={idx} value={Currency}>{Currency}</option>
        ))

        
        
      }
     
    </select>

  </div>
  
</div>
<div class= " w-[80%] h-[30%] bg-white rounded-lg flex flex-row justify-between p-3 ">
  <div>
  <h3 class= "font-medium text-xl text-gray-400">From</h3>
  <input class= "w-[100%] h-[50%] border border-gray-300 rounded-lg mt-3 outline-none px-3  " readOnly 
  type="Number" placeholder="0.00" disabled ={amountDisabled} value={finaldata}  />
  </div>
  <div>
    <h3 class= "font-medium text-xl text-gray-400">Currency Type</h3>
    <select readOnly class= "w-[100%] h-[50%]  bg-gray-100 rounded-lg mt-3 outline-none px-3 " name="currency" 
      disabled={currenctdisabled}>
             
          <option value="inr"> INR</option>
     
    </select>

  </div>
  
</div>
<button onClick={()=>Answer()}  class="bg-blue-500 w-[80%] h-[15%] hover:bg-blue-600 text-gray-100 font-semibold text-xl py-2 px-4 border border-blue-400 rounded-lg shadow"> Convert USD to INR </button>

 
</div>
      </form> 
    </div>
  )
}

export default Home
 