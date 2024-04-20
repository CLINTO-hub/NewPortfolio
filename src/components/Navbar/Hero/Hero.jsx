import React from 'react'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import heroImg from '../../../assets/clinto1.jpeg'
import Resume from '../../../assets/clinto.pdf'


const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={heroImg} alt=''/>
        <h1><span>I'm Clinto George,</span> Full stack developer based in India.</h1>
        <h3>I am from cochin, Kerala with 1 year of in hand experience in MERN stack development</h3>
        <div className='hero-action'>
            <div  className='hero-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <a href={Resume} download className='hero-resume'>Download my resume</a>
        </div>
    </div>
  )
}

export default Hero