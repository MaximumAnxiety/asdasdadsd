import { useState } from 'react'
import './App.css'
import  DataDisplay  from './components/molekules/DataDisplay'
import DataDisplay2 from './components/molekules/DataDisplay2'
import FindByLetter from './components/molekules/FindByLetter'

function App() {
 


  return (

    <>
    
      <h1>App</h1>
      {/* <DataDisplay string='ahoj' />  */}
      <DataDisplay2 string='ahoj' />
      
        <FindByLetter string='sad' />
    </>

  )
}

export default App
