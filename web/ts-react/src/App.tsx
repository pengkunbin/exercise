import React from 'react';
import Hello from './components/Hello'
import LikeButton from './components/LikeButton'
import logo from './logo.svg';
import { Logo } from './components/Logo'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo logo={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Hello />
        <LikeButton />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
