import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClickableText from './components/ClickableText';

function App() {
  return (
    <div>
      <ClickableText initialText="Click me" clickedText="You clicked me!" />
    </div>
  );
}

export default App;