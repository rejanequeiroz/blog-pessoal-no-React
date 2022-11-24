import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './home/Home'
import { Grid } from '@material-ui/core';
import Navbar from './componentes/estaticos/navbar/Navbar';
import Footer from './componentes/estaticos/footer/Footer';

function App() {
  return (
    <>
    < Navbar />
    < Home />
    < Footer />
    </>
  );
}

export default App;
