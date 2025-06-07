import { useState } from 'react'

import './App.css'
import Navbar from './Layouts/Navbar'
import Hero from './Home/Hero'
import Section1 from './Home/Section1'
import Section2 from './Home/Section2'
import Section3 from './Home/Section3'
import Footer from './Layouts/Footer'

function App() {


  return (
    <>
    
     <Hero/>
     <Section1/>
     <Section2/>
     <Section3/>
     <Footer/>
    </>
  )
}

export default App
