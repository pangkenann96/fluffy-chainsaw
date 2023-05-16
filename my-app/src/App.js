import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClickableText from './components/ClickableText';

function App() {
  return (
    <div className="container">
      <ClickableText/>
      <ClickableText/>
      <ClickableText/>
    </div>
  );
}

export default App;