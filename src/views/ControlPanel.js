import React, { useState, useContext } from 'react';
import BlogPostForm from '../components/BlogPostForm';
import { AuthContext } from '../auth/authContext';
import UploadForm from '../components/UploadForm';

const ControlPanel = () => {
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);
  const { handleLogOut } = useContext(AuthContext);

  return (
    <div className='control-container'>
      <h3 className='control-title'>upload blog posts</h3>
      <UploadForm file={file} setFile={setFile} setFileUrl={setFileUrl} />
      <BlogPostForm fileUrl={fileUrl} setFileUrl={setFileUrl} />
      <button onClick={handleLogOut} className='control-btn'>
        Log Out
      </button>
    </div>
  );
};

export default ControlPanel;
