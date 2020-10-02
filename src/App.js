import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {console.log(process.env.REACT_APP_YOUTUBE_API_KEY)}
      </header>
    </div>
  );
}

export default App;
