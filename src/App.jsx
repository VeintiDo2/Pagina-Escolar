import { useState } from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Body from './Components/Body'
import Home from './Components/Home'
import './App.css'


function App() {
  const [option, setOption] = useState(<Home></Home>)


  return (
    <div className='page'>
      <Header setOption={setOption}></Header>
      <Body option={option}></Body>
      <Footer></Footer>
    </div>
  )
}

export default App
