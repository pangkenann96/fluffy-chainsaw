import React, { useState, useEffect } from 'react';
import './ClickableText.css';

const ClickableText = ({ initialText: propsInitialText, clickedText: propsClickedText }) => {
  const [clicked, setClicked] = useState(false);
  const [clickedText, setClickedText] = useState(propsClickedText || '');
  const [initialText, setInitialText] = useState(propsInitialText || '');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const data = await response.json();
      setInitialText(data.title);
    };

    if (!propsInitialText) {
      fetchData();
    }
  }, [propsInitialText]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/2');
      const data = await response.json();
      setClickedText(data.title);
    };

    if (clicked && !propsClickedText) {
      fetchData();
    } else if (!clicked) {
      setClickedText(propsClickedText || '');
    }
  }, [clicked, propsClickedText]);

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