import Home from './components/CargarPedido';
import TablaPedidos from './components/TablaPedidos';
import CargarPedido from './components/Home';
import React, {useState} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';
import './App.css';

function App() {


  return (
      <BrowserRouter>
        <Route exact path='/qChurreria' component={()=><Home/>}/>
        <Route exact path='/qChurreria' render={(props)=><TablaPedidos {...props} state={props}/>}/>
        <Route exact path='/cargarPedido' component={()=><CargarPedido/>}/>
      </BrowserRouter>   
  );
}

export default App;