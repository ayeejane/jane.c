import React from 'react';
import {Routes, Route} from "react-router-dom";
import { About, Connect, Home, Projects } from './pages';
import MainNav from './pages/MainNav';

import "./app.css";
import './styles.css';

export default class App extends React.Component{
  render() {
    return ( 
      <div className='App'>
        <MainNav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    );
  }
}