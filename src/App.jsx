import { useState } from 'react'
import './App.scss'
import Header from './components/Header'
import Body from './components/Body'
import { useEffect } from 'react'

function App() {
  useEffect(
    () => {
      window.alert("Click on button for see Partner Museum");
    },
    []
  )
  return(
    <>
<Header/>
<Body/>
    </>

  )
}
export default App
