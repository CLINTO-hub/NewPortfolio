import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Navbar/Hero/Hero.jsx'
import About from './components/Navbar/about/About.jsx'
import Services from './components/Navbar/Services/Services.jsx'
import Mywork from './components/Navbar/Mywork/Mywork.jsx'
import Contact from './components/Navbar/contact/Contact.jsx'
import Footer from './components/Navbar/Footer/Footer.jsx'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Mywork/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App