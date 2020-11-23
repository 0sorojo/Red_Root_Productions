import React, { useEffect } from 'react';
import useStorage from '../utils/useStorage';

const ProgressBar = ({ file, setFile, setFileUrl }) => {
  const { url, progress } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
      setFileUrl(url);
    }
  }, [url, setFile]);

  return <div className='progress-bar' style={{ width: progress + '%' }}></div>;
};

export default ProgressBar;
