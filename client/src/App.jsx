import React from 'react'
import Home from './Component/Home'
import {Toaster} from 'react-hot-toast'
 

function App() {
  return (
    <>
      <Home/>
  
  <Toaster position="top-center" reverseOrder={false}/>
    </>
  )
}

export default App