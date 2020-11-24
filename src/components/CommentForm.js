import React, { useState } from 'react';
import fire from '../auth/firebase';

const CommentForm = ({ id }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    fire
      .firestore()
      .collection('comments')
      .add({
        blogID: id,
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
    <div className='comment-form-container'>
      <h4>Leave a Comment</h4>
      <form onSubmit={onSubmit} className='form'>
        <div className='comment-info'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
          />
        </div>
        <div className='comment-info'>
          <label htmlFor='comment'>Comment</label>
          <input
            type='text'
            value={body}
            onChange={(e) => setBody(e.currentTarget.value)}
          />
        </div>
        <button className='btn' type='submit'>
          Add Comment
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
