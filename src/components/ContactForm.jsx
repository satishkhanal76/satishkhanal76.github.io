import React from 'react'
import './ContactForm.css'


const ContactForm = () => {
  return (
    <div id='contact-me' className='container contact-form-container'>
        <h2>Contact Me</h2>
        <form action="https://formsubmit.co/satishkhanal76@icloud.com" method="POST" className='contact-form'>
            <div className="contact-form-title">
                <h4>Feel free to reach out!</h4>
                <p>I'd love to hear from you. Please fill out the form below and I'll get back to you as soon as possible.</p>
            </div>
            <div className='form-group'>
                <label htmlFor='name'>Name</label>
                <input placeholder='Enter your name' type='text' id='name' name='name' required />
            </div>
            <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input placeholder='Enter your email' type='email' id='email' name='email' required />
            </div>
            <div className='form-group'>
                <label htmlFor='message'>Message</label>
                <textarea placeholder='Enter your message' id='message' name='message' rows='5' required></textarea>
            </div>
            <input type="hidden" name="_subject" value="New message from the contact form!"></input>
            <button type='submit' className='btn contact-form-btn'>Send Message</button>
        </form>
    </div>
  )
}

export default ContactForm