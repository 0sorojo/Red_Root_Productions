import React, { useState } from 'react';
import fire from '../auth/firebase';

const BlogPostForm = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    fire
      .firestore()
      .collection('blog')
      .add({
        title,
        body,
        time: new Date().getTime(),
      })
      .then(() => {
        setTitle('');
        setBody('');
      });
  };

  return (
    <div className='form-container'>
      <form onSubmit={onSubmit} className='form'>
        <h4>Submit a Blog Post</h4>
        <div className='comment-info'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
          />
        </div>
        <div className='comment-info'>
          <label htmlFor='body'>Comment</label>
          <textarea
            type='text'
            value={body}
            onChange={(e) => setBody(e.currentTarget.value)}
          />
        </div>
        <button className='btn'>Add Blog</button>
      </form>
    </div>
  );
};

export default BlogPostForm;
