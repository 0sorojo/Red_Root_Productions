import React, { useEffect, useState } from 'react';
import fire from '../auth/firebase';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    fire
      .firestore()
      .collection('messages')
      .add({
        name,
        email,
        message,
        time: new Date().getTime(),
      })
      .then(() => {
        setName('');
        setEmail('');
        setMessage('');
        setIsSent(true);
      });
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsSent(false);
    }, 3000);
    return () => clearTimeout(timeOut);
  }, [isSent]);

  return (
    <div className='form-container'>
      <h2>Contact Us</h2>
      {!isSent ? (
        <form className='form' onSubmit={onSubmit}>
          <h4>
            Basic Information: <span>(required)</span>
          </h4>
          <div className='contact-info'>
            <label htmlFor='name'>Hi my name is: </label>
            <input
              type='text'
              name='name'
              id='name'
              placeholder='enter name'
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
              autoFocus
              required
            />
          </div>

          <div className='contact-info'>
            <label htmlFor='email'>My email is:</label>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='enter email'
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              required
            />
          </div>
          <div className='contact-info'>
            <label htmlFor='message'>Message:</label>
            <textarea
              name='message'
              id='message'
              cols='30'
              rows='10'
              required
              placeholder='questions or comments'
              value={message}
              onChange={(e) => setMessage(e.currentTarget.value)}
            />
          </div>
          <button className='btn' type='submit'>
            Submit
          </button>
        </form>
      ) : (
        <div className='contact-received'>Your Message has been Received.</div>
      )}
    </div>
  );
};

export default ContactForm;
