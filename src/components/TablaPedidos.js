import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import '../styles/ShipData.css';


class TablaPedidos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            satellites: props.location.state.satellites,
            shipData: {}
        }
    }

    render() {
        return (
            <>
                <div className="p-3">
                    {this.state.shipData.position == null ? <h5>The <strong>position</strong> could not be retrieved</h5> : <h5>The <strong>position</strong> is <strong>{this.state.shipData.position}</strong></h5>}
                </div>
                <div className="p-3">
                    {this.state.shipData.message == null ? <h5>El <strong>message</strong> could not be retrieved</h5> : <h5>The <strong>message</strong> is <strong>{this.state.shipData.message}</strong></h5>}
                </div>
            </>
        )
    }

}

export default ShipData;
