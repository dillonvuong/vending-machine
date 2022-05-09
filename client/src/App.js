import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import DataFetching from './components/DataFetching';

function App() {
  return (
    <div className="VendingMachine">
      <DataFetching/>
    </div>
  );
}

export default App;
