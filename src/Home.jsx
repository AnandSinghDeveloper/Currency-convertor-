import React from 'react'

const Home = ({ labal,
  oncurrencyChange,
  currencyOptions=[],
  onAmountChange,
  Amount,
  amountDisabled=false,
  currenctdisabled=false,
  selectedCurrency="usd",}) => {
 


  return (
    <div class= "flex justify-center items-center h-screen bg-[url('https://plus.unsplash.com/premium_photo-1681437744904-d815bc19c2f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-repeat-no ">
      
      <div class= "container w-[50vw] h-[55vh] border-white border backdrop-blur-sm shadow-lg bg-transparent rounded-xl flex flex-col justify-center gap-7 items-center  ">


        <div class= " w-[80%] h-[30%] bg-white rounded-lg flex flex-row justify-between p-3 ">
          <div>
          <h3 class= "font-medium text-xl text-gray-400">To</h3>
          <input class= "w-[100%] h-[50%] border border-gray-300 rounded-lg mt-3 outline-none px-3 " type="Number" placeholder="0.00" disabled ={amountDisabled} value={Amount} onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value) ) } />
          </div>
          <div>
            <h3 class= "font-medium text-xl text-gray-400">Currency Type</h3>
            <select class= "w-[100%] h-[50%]  bg-gray-100 rounded-lg mt-3 outline-none px-3 " name="currency" value={selectedCurrency} onChange={(e) => oncurrencyChange && oncurrencyChange(e.target.value) } 
              disabled={currenctdisabled}>
              
              {
                currencyOptions.map((Currency) => (
                  <option key={Currency} value={Currency}>{Currency}</option>
                ))
              }
             
            </select>

          </div>
          
        </div>
        <div class= " w-[80%] h-[30%] bg-white rounded-lg flex flex-row justify-between p-3 ">
          <div>
          <h3 class= "font-medium text-xl text-gray-400">From</h3>
          <input class= "w-[100%] h-[50%] border border-gray-300 rounded-lg mt-3 outline-none px-3 " type="Number" placeholder="0.00" disabled ={amountDisabled} value={Amount} onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value) ) } />
          </div>
          <div>
            <h3 class= "font-medium text-xl text-gray-400">Currency Type</h3>
            <select class= "w-[100%] h-[50%]  bg-gray-100 rounded-lg mt-3 outline-none px-3 " name="currency" value={selectedCurrency} onChange={(e) => oncurrencyChange && oncurrencyChange(e.target.value) } 
              disabled={currenctdisabled}>
              
              {
                currencyOptions.map((Currency) => (
                  <option key={Currency} value={Currency}>{Currency}</option>
                ))
              }
             
            </select>

          </div>
          
        </div>
        <button class="bg-blue-500 w-[80%] h-[15%] hover:bg-blue-600 text-gray-100 font-semibold text-xl py-2 px-4 border border-blue-400 rounded-lg shadow"> Convert USD to INR </button>

         
      </div>
    </div>
  )
}

export default Home
