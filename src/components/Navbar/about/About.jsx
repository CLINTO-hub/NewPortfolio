import React from 'react'
import theme_pattern from '../../../assets/theme_pattern.svg'
import heroImg1 from '../../../assets/clintowork.jpeg'
import './About.css'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className='about-title'>
            <h1>About me</h1>
            <img src='' className='image'  alt=''/>
        </div>
        <div className='about-sections'>
            <div className='about-left'>
                <img src={heroImg1} alt=''/>
            </div>
            <div className='about-right'>
                <div className='about-para'>
                    <p>I am an full stack developer with one year of hands on experience in MERN stack development.  </p>
                    <p>My passion for full stack development is not reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project </p>
                </div>
                <div className='about-skills'>
                    <div className='about-skill'><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                    <div className='about-skill'><p>Javascript</p><hr style={{width:"70%"}}/></div>
                    <div className='about-skill'><p>Mongo DB</p><hr style={{width:"80%"}}/></div>
                    <div className='about-skill'><p>React JS</p><hr style={{width:"80%"}}/></div>
                    <div className='about-skill'><p>Node JS</p><hr style={{width:"80%"}}/></div>
                    <div className='about-skill'><p>Express JS</p><hr style={{width:"80%"}}/></div>
                    <div className='about-skill'><p>Tailwind CSS</p><hr style={{width:"70%"}}/></div>
                    <div className='about-skill'><p>Redux</p><hr style={{width:"60%"}}/></div>
                    <div className='about-skill'><p>Socket.IO</p><hr style={{width:"60%"}}/></div>
                </div>
            </div>
        </div>
        <div className='about-achievements'>
            <div className='about-achievement'>
                <h1>1+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr/>
            <div className='about-achievement'>
                <h1>19+</h1>
                <p>PROJECTS COMPLETED</p>
                </div>
        </div>

    </div>
  )
}

export default About