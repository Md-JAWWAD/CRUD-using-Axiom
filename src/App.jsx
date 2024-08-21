import { useState } from 'react'
import './App.css'
import PostAxios from './PostAxios'
import { Route, Routes } from 'react-router-dom'
import  Table  from './Table'

function App() {

  return (
  <>
  <Routes>
    <Route path='/' element={<PostAxios />}/>     
    <Route path='/table' element={<Table />}/>     
  </Routes>
    
  </>
  )
}

export default App
