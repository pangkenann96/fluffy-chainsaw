import React, { useState, useEffect } from 'react';

const ClickableText = ({ initialText }) => {
  const [clicked, setClicked] = useState(false);
  const [clickedText, setClickedText] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
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