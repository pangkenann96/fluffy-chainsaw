import React, { useState } from 'react';

const ClickableText = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <div onClick={handleClick}>
      {clicked ? <p>You clicked me!</p> : <p>Click me!</p>}
    </div>
  );
};

export default ClickableText;