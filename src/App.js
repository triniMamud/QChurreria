import Home from './components/CargarPedido';
import CargarPedido from './components/Home';
import './App.css';

const { React} = require("react");
const { BrowserRouter, Route, Redirect } = require("react-router-dom");

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