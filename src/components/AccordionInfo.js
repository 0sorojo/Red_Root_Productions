import React, { useState, useRef } from 'react';
import { IoIosArrowDroprightCircle } from 'react-icons/io';

const AccordionInfo = ({ title, quote, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [height, setHeight] = useState('0px');
  const [margin, setMargin] = useState(0);

  const content = useRef(null);

  const handleClick = () => {
    const actualHeight = content.current.scrollHeight + 32;

    setHeight(showInfo ? '0px' : `${actualHeight}px`);
    setMargin(showInfo ? 0 : '1rem 1rem');
    setShowInfo(!showInfo);
  };

  return (
    <article className='accordion-container'>
      <header className='accordion' onClick={handleClick}>
        <h3 className='accordion-title'>{title}</h3>
        <button
          className={`${showInfo ? 'arrow-btn rotate' : 'arrow-btn'}`}
          onClick={handleClick}
        >
          <IoIosArrowDroprightCircle />
        </button>
      </header>
      <h4
        ref={content}
        style={{ maxHeight: `${height}`, margin: `${margin}` }}
        className='accordion-text'
      >
        <p className='bold'>{quote}</p>

        {info}
      </h4>
    </article>
  );
};

export default AccordionInfo;
