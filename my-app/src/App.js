import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClickableText from './components/ClickableText';

function App() {
  return (
    <div>
      <ClickableText
        unclickedText="Click me!"
        clickedText="Thanks for clicking!"
      />
    </div>
  );
}

export default App;