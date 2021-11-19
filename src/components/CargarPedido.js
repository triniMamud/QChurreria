import React, { useState } from 'react';
import { Link, Router } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import '../styles/FindShipInformation.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function CargarPedido() {


    const [pedido, setPedido] = useState({
        //cosas del pedido
    })

    const [pedidos, setPedidos] = useState(['']);

    let history = useHistory();

    let handleForm = (event, valor) => {
        history.push(
            {
                pathname: "/cargarPedido",
                state: pedidos
            }
        );
        event.stopPropagation();
        event.preventDefault();
    }

    return (
        <div className="form">
            <Form onSubmit={handleForm}>
                <h2>Cargar nuvo pedido</h2>
                <div className="d-flex justify-content-center">
                    <div className="p-3 mr-5 ml-5 container">
                        <Form.Group controlId="nroOrden">
                            <Form.Control type="number" placeholder="Numero de Orden" name="distance" value={pedido.nroOrden}/>
                        </Form.Group>
                        <Form.Group controlId="fechaEntrega">
                            <Form.Control type="date" placeholder="Fecha de Entrega" name="date" value={pedido.fecha}/>
                        </Form.Group>
                        <Form.Group controlId="cantidad">
                            <Form.Control type="number" placeholder="Cantidad" name="date" value={pedido.cantidad}/>
                        </Form.Group>
                        <Form.Group controlId="cliente">
                            <Form.Control type="text" placeholder="Nombre del Cliente" name="date" value={pedido.cliente}/>
                        </Form.Group>
                        <Form.Group controlId="importe">
                            <Form.Control type="text" placeholder="Importe" name="date" value={pedido.importe}/>
                        </Form.Group>
                    </div>
                </div>
                <Button className="mt-5 mb-5 mr-2 ml-2" size="lg" variant="info" type="submit">Cargar pedido</Button>
            </Form>
        </div>
    )

}

export default CargarPedido;