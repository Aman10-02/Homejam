import React from 'react';
import './App.css';
import Main from './components/Main';
import Home from './components/Home';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/main' element={<Main />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

     