import React from 'react';
import BlogPostForm from './components/BlogPostForm';

import CommentForm from './components/CommentForm';
import CommentList from './components/CommentList';

// router wrapping

const App = () => {
  return (
    <>
      <h1>I work</h1>

      <BlogPostForm />

      <CommentList />

      <CommentForm />
    </>
  );
};

export default App;
