import React from 'react';

import CommentForm from './components/CommentForm';
import CommentList from './components/CommentList';

const App = () => {
  return (
    <>
      <h1>I work</h1>
      <CommentList />
      <CommentForm />
    </>
  );
};

export default App;
