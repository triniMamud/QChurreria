import Home from './components/Home';
import CargarPedido from './components/CargarPedido';
import './App.css';

const { React} = require("react");
const { BrowserRouter, Route, Redirect } = require("react-router-dom");


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