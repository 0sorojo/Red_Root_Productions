import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = ({ file, setFile, setFileUrl }) => {
  const [error, setError] = useState(null);

  const types = ['image/png', 'image/jpeg'];

  const changeHandler = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('select image file (png or jpeg)');
    }

    console.log(file);
  };

  return (
    <form className='form-container'>
      <input type='file' onChange={changeHandler} />
      <div className='output'>
        {error && <div className='error'> {error}</div>}
        {file && <div className='file'>{file.name}</div>}
        {file && (
          <ProgressBar file={file} setFile={setFile} setFileUrl={setFileUrl} />
        )}
      </div>
    </form>
  );
};

export default UploadForm;
