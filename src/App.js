import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Details from './components/Details';

function App() {
  return (
    <div className="App">
        <Router>
          <Header/>
          <Routes>
            <Route path="detail" element={<Details/>}></Route>
            <Route path='/' element={<Home />}> </Route>
          </Routes>
         </Router>

    </div>
  );
}

export default App;
