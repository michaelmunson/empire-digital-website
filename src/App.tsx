import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import "./animations.css"

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path={"/"} element={
          <HomePage/>
        }/>
      </Routes>
    </Router>
  );
}

export default App;
