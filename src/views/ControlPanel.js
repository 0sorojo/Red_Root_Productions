import React from 'react';
import BlogPostForm from '../components/BlogPostForm';

const ControlPanel = () => {
  return (
    <div>
      <h3>
        This is where the admin uploads / edits / deletes their blog posts
      </h3>
      <BlogPostForm />
    </div>
  );
};

export default ControlPanel;
