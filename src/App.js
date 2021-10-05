import './App.css';
import Navbar from './Components/navbar';
import Counters from './Components/counters';
import { render } from 'react-dom';
import React from 'react';
// import Counter from './Components/counter';

function App() {
  return (
    <React.Fragment>
    <Navbar/>
    <main className="container">
      <Counters />
    </main>
    </React.Fragment>
  );

}

export default App;
