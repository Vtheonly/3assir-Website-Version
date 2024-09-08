import React, { useState, useEffect } from 'react';
import './App.css';


import Grid from './componennt/grid';
import Result from './componennt/result';
import SearchBar from './componennt/SearchBar.js';

function App() {
  return (
    <div>
      <SearchBar />
      <div className="section-2">
        <Grid />
        <Result />
      </div>
    </div>
  );
}

export default App;

