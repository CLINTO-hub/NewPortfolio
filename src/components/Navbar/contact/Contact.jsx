import React from 'react'
import theme_pattern from '../../../assets/theme_pattern.svg'
import mail_icon from '../../../assets/mail_icon.svg'
import location_icon from '../../../assets/location_icon.svg'
import call_icon from '../../../assets/call_icon.svg'
import { toast } from 'react-toastify'
import './Contact.css'

const Contact = () => {


        
   

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        try{
        
    
        formData.append("access_key", "faa9c2ce-1ba5-43ca-a00c-832ef2ea4669");
    
        const object = Object.fromEntries(formData);
        console.log('object',object);
        const json = JSON.stringify(object);

        if(!object.email || !object.name){
            throw new Error('Please enter the email and name')
        }
        
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
          toast.success(res.message)
        }
      
    } catch (error) {

        toast.error(error.message)


        
    }
}
    


  return (
    <div id='contact' className='contact'>
        <div className='contact-title'>
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt=''/>
            </div>
            <div className='contact-section'>
                <div className='contact-left'>
                    <h1>Let's talk</h1>
                    <p>I'm currently avaliable take on new projects, so feel free to get in touch with me. You can contact any time</p>
                    <div className='contact-details'>
                        <div className='contact-detail'>
                            <img src={mail_icon} alt=''/><p>clintogeorge007@gmail.com</p>
                        </div>
                        <div className='contact-detail'>
                            <img src={call_icon} alt=''/><p>+91 9562857669</p>
                            </div>
                            <div className='contact-detail'>
                            <img src={location_icon} alt=''/><p>Cochin, Kerala-India</p>
                            </div>
                        
                    </div>

                </div>
                <form onSubmit={onSubmit} className='contact-right'>
                    <label htmlFor=''>Your Name</label>
                    <input type='text' placeholder='Enter your name' name='name'/>
                    <label htmlFor=''>Your Email</label>
                    <input type='email' placeholder='Enter your email' name='email'/>
                    <label htmlFor=''>Write your message here</label>
                    <textarea name='message' rows='8' placeholder='Enter your message'/>
                    <button type='submit' className='contact-submit'>submit</button>

                </form>
            </div>

        </div>
    
  )
}

export default Contact