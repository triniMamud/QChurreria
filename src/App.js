import Home from './components/CargarPedido';
import CargarPedido from './components/Home';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route, Redirect} from 'react-router-dom';
import './App.css';

function App() {


  return (
      <BrowserRouter>
        <Redirect to="/qChurreria" />
        <Route exact path='/qChurreria' render={(props)=><Home {...props} state={props}/>}/>
        <Route exact path='/cargarPedido' component={()=><CargarPedido/>}/>
      </BrowserRouter>   
  );
}

export default App;