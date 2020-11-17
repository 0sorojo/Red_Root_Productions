import React, { useState } from 'react';
import fire from '../auth/firebase';

const CommentForm = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    fire
      .firestore()
      .collection('comments')
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
    <div>
      <form onSubmit={onSubmit}>
        <h4>Leave a Comment</h4>
        <div>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
          />
        </div>
        <div>
          <label htmlFor='comment'>Comment</label>
          <input
            type='text'
            value={body}
            onChange={(e) => setBody(e.currentTarget.value)}
          />
        </div>
        <button>Add Comment</button>
      </form>
    </div>
  );
};

export default CommentForm;
