import Home from './components/Home';
import CargarPedido from './components/CargarPedido';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route, Redirect} from 'react-router-dom';
import './App.css';

function App() {


  return (

      <BrowserRouter>
        <Redirect to="/qChurreria" />
        <Route exact path='/qChurreria' component={(props)=><Home {...props} state={props}/>}/>
        <Route exact path='/cargarPedido' component={()=><CargarPedido/>}/>
      </BrowserRouter>   
  );
}

export default App;