import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Header from '../componets/header'
import UI from '../componets/UI'
import {Outlet} from "react-router-dom"
import {Provider} from "react-redux"
import Confi from '../componets/confuguration'
import contextbyme from '../componets/contxt'
function App() {
  const [count, setCount] = useState("shubh")

  return (
    <>
    <contextbyme.Provider value = {{login:count ,setCount}}>
    <Provider store={Confi}>
     <Header/>
     {/* <UI/> */}
     <Outlet/>
     </Provider>
     </contextbyme.Provider>
    </>
  )
}

export default App
