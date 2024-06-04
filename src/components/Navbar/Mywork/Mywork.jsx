import React from 'react'
import './Mywork.css'
import theme_pattern from '../../../assets/theme_pattern.svg'
import mywork_data from '../../../assets/mywork_data.js'
import arrow_icon from '../../../assets/arrow_icon.svg'

const Mywork = () => {
  return (
    <div id='work' className='mywork'>
      <div className='mywork-title'>
        <h1>My latest work</h1>
        <img src={theme_pattern} alt=''/>
      </div>
      <div className="mywork-container">
        {
          mywork_data.map((work, index) => {
            return (
              <a key={index} href={work.w_url} target="_blank" rel="noopener noreferrer">
                <img src={work.w_img} alt=''/>
                <div className="mywork-overlay">
                  <h2>{work.w_name}</h2>
                  <p>{work.w_details}</p>
                </div>
              </a>
            )
          })
        }
      </div>
      <div className="mywork-showmore">
        <a href='https://github.com/CLINTO-hub'>Git repository</a>
        <img src={arrow_icon} alt=''/>
      </div>
    </div>
  )
}

export default Mywork
