import React, { useState, useRef } from 'react';
import { IoIosArrowDroprightCircle } from 'react-icons/io';

const AccordionInfo = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [height, setHeight] = useState('0px');
  const [margin, setMargin] = useState(0);

  const content = useRef(null);

  const handleClick = () => {
    setHeight(showInfo ? '0px' : `${content.current.scrollHeight}px`);
    setMargin(showInfo ? 0 : '2rem 1rem');
    setShowInfo(!showInfo);
  };

  return (
    <article className='accordion-container'>
      <header className='accordion'>
        <h3 className='accordion-title'>{title}</h3>
        <button
          className={`${showInfo ? 'arrow-btn rotate' : 'arrow-btn'}`}
          onClick={handleClick}
        >
          <IoIosArrowDroprightCircle />
        </button>
      </header>
      <p
        ref={content}
        style={{ maxHeight: `${height}`, margin: `${margin}` }}
        className='accordion-text'
      >
        {info}
      </p>
    </article>
  );
};

export default AccordionInfo;
