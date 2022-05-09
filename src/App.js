import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import SingleBreweryDetails from './component/SingleBreweryDetails';


function App() {
  return (
    <Router>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='brewery/:id' element={<SingleBreweryDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
