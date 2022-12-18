import React, {useEffect} from 'react';
import {BrowserRouter} from "react-router-dom";
import Layout from './containers/Layout/Layout';
import './App.css';

function App() {
  useEffect(() => {
    // For the collection items.
    // localStorage.setItem("items", JSON.stringify([]));
    
    // For the liked playlists
    // localStorage.setItem("likedPlaylists", JSON.stringify([]));
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </div>
  )
}

export default App;