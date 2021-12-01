import React, { Component } from 'react';
//import { Button } from 'bootstrap';
import { Link } from 'react-router-dom';
import { Button, Table, Container} from 'reactstrap';
import CargarPedido from './CargarPedido';


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pedidos: [
                {numeroOrden:1,fechaEntrega:'12/05/2021',cantidad:10,cliente:'El diegote',importe: 1200},
                {numeroOrden:2,fechaEntrega:'16/07/2021',cantidad:230,cliente:'Gaspi',importe: 3500}
            ]
        };
        

     }



    
    guardarArray = () => {
        localStorage.setItem('arrayPedidos', JSON.stringify( this.state.pedidos ));
    }
    

    render() {
        console.log(this.state.pedidos);
        this.pedidos= [
            {numeroOrden:1,fechaEntrega:'12/05/2021',cantidad:10,cliente:'El diegote',importe: 1200},
            {numeroOrden:2,fechaEntrega:'16/07/2021',cantidad:230,cliente:'Gaspi',importe: 3500}
        ];
        return (
            <>
                <Container>
                    <img src="src\QChurreria.jpeg" alt="QChurreria" />
                    <div>
                        <h3>Cantidad de churros a producir mañana: {this.state.pedidos.total}</h3>
                    </div>
                    <br />
                    <Link to="/cargarPedido" style={{ textDecoration: 'none' }}>
                        <Button style={{ paddingLeft: 13 }} onClick={this.guardarArray}>Cargar Pedido</Button>
                    </Link>
                    <br /><br />
                    <Table>
                        <thead><tr>
                            <th>Número de Órden</th>
                            <th>Fecha de Entrega</th>
                            <th>Cantidad</th>
                            <th>Cliente</th>
                            <th>Importe</th>
                            <th></th>                   
                        </tr></thead>
                        <tbody>
                        {this.state.pedidos.map(pedido => 
                                    <tr>
                                        <td>{pedido.numeroOrden}</td>
                                        <td>{pedido.fechaEntrega}</td>
                                        <td>{pedido.cantidad}</td>
                                        <td>{pedido.cliente}</td>
                                        <td>{pedido.importe}</td>
                                        <td>
                                            <Button color="danger">Eliminar</Button>
                                        </td>
                                    </tr>
                                )}
                                <tr ng-repeat="imagen in imagesList">
                                    
                            </tr>
                        </tbody>
                        <script src="CargarPedido.js">
                        </script>
                    </Table>

                </Container>

            </>
        )
    }    

}

export default Home;


