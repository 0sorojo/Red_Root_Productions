import React, { useState } from 'react';
import fire from '../auth/firebase';

const BlogPostForm = ({ fileUrl, setFileUrl }) => {
  const [title, setTitle] = useState('');
  const [bodyOne, setBodyOne] = useState('');
  const [quote, setQuote] = useState('');
  const [bodyTwo, setBodyTwo] = useState('');
  const [imageAlt, setImageAlt] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    fire
      .firestore()
      .collection('blog')
      .add({
        imageAlt,
        title,
        fileUrl,
        bodyOne,
        quote,
        bodyTwo,
        time: new Date().getTime(),
      })
      .then(() => {
        setImageAlt('');
        setTitle('');
        setBodyOne('');
        setQuote('');
        setBodyTwo('');
        setFileUrl(null);
      });
  };

  return (
    <div className='form-container'>
      <form onSubmit={onSubmit} className='form'>
        <h4>Submit a Blog Post</h4>
        <div className='comment-info'>
          <label htmlFor='imageAlt'>Image Alt Text</label>
          <input
            type='text'
            value={imageAlt}
            onChange={(e) => setImageAlt(e.currentTarget.value)}
          />
        </div>
        <div className='comment-info'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
          />
        </div>
        <div className='comment-info'>
          <label htmlFor='bodyOne'>1st Part</label>
          <textarea
            type='text'
            value={bodyOne}
            onChange={(e) => setBodyOne(e.currentTarget.value)}
          />
        </div>
        <div className='comment-info'>
          <label htmlFor='quote'>Quote</label>
          <input
            type='text'
            value={quote}
            onChange={(e) => setQuote(e.currentTarget.value)}
          />
        </div>
        <div className='comment-info'>
          <label htmlFor='bodyTwo'>2nd Part</label>
          <textarea
            type='text'
            value={bodyTwo}
            onChange={(e) => setBodyTwo(e.currentTarget.value)}
          />
        </div>
        <button className='btn'>Add Blog</button>
      </form>
    </div>
  );
};

export default BlogPostForm;
