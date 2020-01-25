import React from 'react';
import './App.css';
import ColorBox from './components/ColorBox';
import ColorContext from './contexts/colors';

function App() {
  return (
    <ColorContext.Provider value={{ color: 'red' }}>
      <div>
        <ColorBox />
      </div>
    </ColorContext.Provider>
  );
}

export default App;
