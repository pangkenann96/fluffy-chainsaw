import React, { useState, useEffect } from 'react';
import './ClickableText.css';

const ClickableText = () => {
  const [clicked, setClicked] = useState(false);
  const [clickedText, setClickedText] = useState('');
  const [initialText, setInitialText] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const data = await response.json();
      setInitialText(data.title);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/2');
      const data = await response.json();
      setClickedText(data.title);
    };

    if (clicked) {
      fetchData();
    } else {
      setClickedText('');
    }
  }, [clicked]);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className='clickable-text' onClick={handleClick}>
      {clicked ? <p>{clickedText}</p> : <p>{initialText}</p>}
    </div>
  );
};

export default ClickableText;