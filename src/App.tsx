import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Layout from './containers/Layout/Layout';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </div>
  )
}

export default App;