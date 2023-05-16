import React, { useState } from 'react';

const ClickableText = ({ initialText, clickedText }) => {
  const [clicked, setClicked] = useState(false);

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