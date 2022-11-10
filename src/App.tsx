import React from 'react';
import { useState, useEffect } from 'react';
import Layout from './containers/Layout/Layout';
import reactLogo from "./assets/react.svg";
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Layout />
    </div>
  )
}

export default App;