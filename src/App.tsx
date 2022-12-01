import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './componentes/paginas/home/Home'
import { Grid } from '@material-ui/core';
import Navbar from './componentes/estaticos/navbar/Navbar';
import Footer from './componentes/estaticos/footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './componentes/paginas/login/Login';
import CadastroUsuario from './componentes/paginas/cadastroUsuario/CadastroUsusario';
import ListaTema from './componentes/temas/ListaTema';
import ListaPostagem from './componentes/postagens/listaPostagem/ListaPostagem';

function App() {
  return (
    <>
    <Router>
      <Navbar />

      <Routes>
        <Route path='/home'element={<Home />}/>
          
        <Route path='/' element={<Login />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/tema' element={<ListaTema />}/>
        <Route path='/postagens' element={<ListaPostagem />}/>

        
        <Route path='/cadastrar' element={<CadastroUsuario />}/>
      </Routes>
      
      <Footer />
    </Router>
    </>
  );
}

export default App;
