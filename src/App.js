import React from 'react'

import Coins from './components/Coins'

import Header from './components/Header'
import Navbar from './components/Navbar'



const App = () => {
  //various components
  return (
    <div className="flex flex-col ">
      <Header/>
      <div className="bg-white">

        <div className="grid grid-cols-7 gap-4 px-10 py-10 bg-red-100 mx-20 my-10 rounded-lg">
          
            <div className="col-span-7">
              <Navbar/>
             
              <div className="grid gap-2 grid-cols-1 ">
              <Coins/>
              </div>
            </div>
          
        </div>
      </div>
    </div>
  )
}

export default App