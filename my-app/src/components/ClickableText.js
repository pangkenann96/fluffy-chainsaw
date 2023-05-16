import React, { useState, useEffect } from 'react';

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
    }
  }, [clicked]);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <div onClick={handleClick}>
      {clicked ? <p>{clickedText}</p> : <p>{initialText}</p>}
    </div>
  );
};

export default ClickableText;