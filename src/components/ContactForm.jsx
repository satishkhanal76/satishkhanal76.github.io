import React, { useState } from 'react'
import './ContactForm.css'

const apiUrl = import.meta.env.VITE_API_URL;

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value,
    };

    try {
      const response = await fetch(`${apiUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        event.target.reset();
      } else {
        const data = await response.json();
        alert(`Message failed to send. Error: ${data.message || 'Unknown error.'}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while sending the message.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id='contact-me' className='container contact-form-container'>
        <h2>Contact Me</h2>
        <form onSubmit={handleFormSubmit} method="POST" className='contact-form'>
            <div className="contact-form-title">
                <h4>I'd love to hear from you!</h4>
                <p>Please fill out the form below and I'll get back to you as soon as possible.</p>
            </div>
            <div className='form-group'>
                <label htmlFor='name'>Name</label>
                <input placeholder='Name..' type='text' id='name' name='name' required />
            </div>
            <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input placeholder='Email..' type='email' id='email' name='email' required />
            </div>
            <div className='form-group'>
                <label htmlFor='message'>Message</label>
                <textarea placeholder='Message..' id='message' name='message' rows='5' required></textarea>
            </div>
            <input type="hidden" name="_subject" value="New message from the contact form!"></input>
            <button type='submit' className='btn contact-form-btn' disabled={isLoading}>
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
        </form>
    </div>
  )
}

export default ContactForm