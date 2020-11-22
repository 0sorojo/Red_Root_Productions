import React, { useContext } from 'react';
import BlogPostForm from '../components/BlogPostForm';
import { AuthContext } from '../auth/authContext';

const ControlPanel = () => {
  const { handleLogOut } = useContext(AuthContext);

  return (
    <div>
      <h3>
        This is where the admin uploads / edits / deletes their blog posts
      </h3>
      <BlogPostForm />
      <button onClick={handleLogOut}>Log Out</button>
    </div>
  );
};

export default ControlPanel;
