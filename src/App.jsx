//import { useState } from 'react'
import Navigation from './component/Navigation';
import './App.css'
import { Outlet } from 'react-router-dom';

function App() {
  

  return (
    <>
    <Navigation/>
    <Outlet/>  
    </>
  )
}

export default App
