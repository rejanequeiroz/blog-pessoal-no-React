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
import CadastroTema from './componentes/temas/cadastrarTema/CadastrarTema';
import CadastroPost from './componentes/postagens/cadastroPost/CadastroPost';
import DeletarTema from './componentes/temas/deletarTema/DeletarTema';
import DeletarPostagens from './componentes/postagens/deletarPostagens/DeletarPostagem';
import CadastrarTema from './componentes/temas/cadastrarTema/CadastrarTema';
import { Provider } from 'react-redux';
import store from './store/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <Provider store={store}>
      <ToastContainer/>
      <Router>
        <Navbar />

        <Routes>
          <Route path='/home' element={<Home />} />

          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/temas' element={<ListaTema />} />
          <Route path='/posts' element={<ListaPostagem />} />
          <Route path='/cadastrar' element={<CadastroUsuario />} />
          <Route path='/formularioTema' element={<CadastrarTema />} />
          <Route path='/formularioTema/:id' element={<CadastrarTema />} />
          <Route path='/formularioPostagem/' element={<CadastroPost />} />
          <Route path='/formularioPostagem/:id' element={<CadastroPost />} />
          <Route path='/deletarTema/:id' element={<DeletarTema />} />
          <Route path='/deletarPostagem/:id' element={<DeletarPostagens />} />
        </Routes>

        <Footer />
      </Router>
      </Provider>
    </>
  );
}

export default App;
