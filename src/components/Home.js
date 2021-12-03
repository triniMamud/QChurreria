import React, { Component, useEffect, useState } from 'react';
//import { Button } from 'bootstrap';
import { Link } from 'react-router-dom';
import { Button, Table, Container } from 'reactstrap';
import CargarPedido from './CargarPedido';
import Imagen from '../QChurreria.jpeg'

const Home = () => {

    const [pedidos, setPedidos] = useState([]);

    useEffect(() => {
        setPedidos(JSON.parse(localStorage.getItem('arrayPedidos')) || [])
    }, []);

    const eliminar = (targetId) => {
        const filtrados = pedidos.filter(pedido => pedido.numeroOrden != targetId);
        setPedidos(filtrados);
        localStorage.setItem('arrayPedidos', JSON.stringify(filtrados));
    }

    return (
        <>
            <Container>
                <img src={Imagen} alt="QChurreria" />
                <div>
                    <h3>Cantidad de churros a producir mañana: {pedidos.reduce((a, b) => a + (b.cantidad*1 || 0), 0)} </h3>
                </div>
                <br />
                <Link to="/cargarPedido" style={{ textDecoration: 'none' }}>
                    <Button style={{ paddingLeft: 13 }}>Cargar Pedido</Button>
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
                        {pedidos.map(pedido =>
                            <tr>
                                <td>{pedido.numeroOrden}</td>
                                <td>{pedido.fechaEntrega}</td>
                                <td>{pedido.cantidad}</td>
                                <td>{pedido.cliente}</td>
                                <td>{pedido.importe}</td>
                                <td>
                                    <Button color="danger" onClick={()=>eliminar(pedido.numeroOrden)}>Eliminar</Button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </Container>
        </>
    )
}

export default Home;
