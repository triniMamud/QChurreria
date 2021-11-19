import React, { Component } from 'react';
import { Button } from 'bootstrap';
import { Link } from 'react-router-dom';


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pedidos: []
        };
     }

    render() {
        return (
            <>
                <div class="firstContainer">
                    <img src="src\QChurreria.jpeg" alt="QChurreria" />
                    <div>
                        <div>
                            <p>Cantidad de churros a producir mañana: {this.props.pedidos.total}</p>
                        </div>
                        <div>
                            <Button><Link style={{ textDecoration: 'none' }} to='/cargarPedido'><div className="link"></div></Link></Button>
                        </div>
                    </div>
                    <div class="container">
                        <table>
                            <tr>
                                <th>Numero de Orden</th>
                                <th>Fecha de Entrega</th>
                                <th>Cantidad</th>
                                <th>Cliente</th>
                                <th>Importe</th>
                            </tr>
                            {this.props.pedidos.map(pedido => 
                                <tr>
                                    <td>{pedido.numeroOrden}</td>
                                    <td>{pedido.fechaEntrega}</td>
                                    <td>{pedido.cantidad}</td>
                                    <td>{pedido.cliente}</td>
                                    <td>{pedido.importe}</td>
                                    <td>
                                        //icono del tachito
                                    </td>
                                </tr>
                            )}
                            /**
                            <tr ng-repeat="imagen in imagesList">
                                
                            </tr>
                             */
                        </table>
                    </div>
                </div>
            </>
        )
    }

}

export default Home;
