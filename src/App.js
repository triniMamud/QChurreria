import FindShipInformation from './components/FindShipInformation';
import ShipData from './components/ShipData';
import SplitShipData from './components/SplitShipData';
import UpdateSplitSatelliteDataMenu from './components/UpdateSplitSatelliteDataMenu';
import UpdateSplitSatelliteData from './components/UpdateSplitSatelliteData';
import Menu from './components/Menu';
import SatelliteData from './components/SatelliteData';
import React, {useState} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';
import './App.css';

function App() {


  return (
      <BrowserRouter>
        <Route exact path='/qChurreria' component={()=><FindShipInformation/>}/>
        <Route exact path='/qChurreria/cargarPedido' render={(props)=><ShipData {...props} state={props}/>}/>
        <Route exact path='/topsecret_split' component={()=><SplitShipData/>}/>
        <Route exact path='/updateSplitSatelliteData' component={()=><UpdateSplitSatelliteDataMenu/>}/>
        <Route exact path='/topsecret_split/:satellite_name' component={(props)=><UpdateSplitSatelliteData {...props} state={props}/>}/>
        <Route exact path='/satelliteData' render={(props)=><SatelliteData {...props} state={props}/>}/>
      </BrowserRouter>   
  );
}

export default App;