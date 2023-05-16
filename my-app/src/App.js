import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClickableText from './components/ClickableText';

function App() {
  return (
    <div className="container">
      <ClickableText initialText="This is the initial text for the first ClickableText component" clickedText="This is the clicked text for the first ClickableText component"/>
      <ClickableText/>
      <ClickableText initialText="This is the initial text for the third ClickableText component" clickedText="This is the clicked text for the third ClickableText component"/>
    </div>
  );
}

export default App;