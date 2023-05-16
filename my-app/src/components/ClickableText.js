import React, { useState, useEffect } from 'react';

const fetchData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const ClickableText = ({ initialText, clickedText }) => {
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchClickedText = async () => {
      const clickedData = await fetchData(clickedText);
      setData(clickedData);
    };

    if (clicked) {
      fetchClickedText();
    }
  }, [clicked, clickedText]);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <div onClick={handleClick}>
      {clicked ? <p>{data}</p> : <p>{initialText}</p>}
    </div>
  );
};

export default ClickableText;