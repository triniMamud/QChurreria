import React, {Component} from 'react';
import axios from 'axios';

class CargarPedido extends Component {

    constructor(props) {
        super(props);
        this.state = {
            satellite : props.location.state,
            resp: {}
        }
    }

    render(){
        return (
            <>
                <div className="p-3">
                    {this.state.satellite.distance == null ? <h5>The <strong>distance</strong> could not be updated</h5> : <h5>The <strong>distance</strong> was updated succesfully</h5>}
                </div>
                <div className="p-3">
                    {this.state.satellite.message == null ? <h5>El <strong>message</strong> could not be updated</h5> : <h5>The <strong>message</strong> was updated successfully</h5>}
                </div>
            </>
        )
    }

}

export default SatelliteData;
