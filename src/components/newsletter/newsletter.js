import React from 'react';
import './newsletter.css'; 
import toast from 'react-hot-toast';

function Newsletter() {
  return (
    <div className='newsletter-container'>
      <h2>Stay updated with our latest news and offers!</h2>
      <form className='newsletter-form'>
        <input type='email' placeholder='Your email address' />
        <button type='submit'>Subscribe</button>
      </form>
    </div>
  );
}

export default Newsletter;
