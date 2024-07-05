import React from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import NewsStyle from './components/NewsStyle'
import { useState } from 'react'

const App = () => {
  const [category, setCategory]=useState("general");

  return (
    <div className='App'>
     <Navbar setCategory={setCategory}/>
     <News category={category}/>
     <NewsStyle/>
    </div>
  )
}

export default App

