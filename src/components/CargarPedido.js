import { useHistory } from "react-router";
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const { React, Component, useState } = require("react");
const { Form, Button } = require("react-bootstrap");


const CargarPedido = () => {

    const history = useHistory();
    const pedidos = JSON.parse(localStorage.getItem("arrayPedidos")) || [];

    const handleForm = (e) => {
        const numeroOrden = document.getElementById("id").value;
        const fechaEntrega = document.getElementById("fecha").value;
        const cantidad = document.getElementById("cantidad").value;
        const cliente = document.getElementById("cliente").value;
        const importe = document.getElementById("importe").value;

        const pedido = {
            numeroOrden,
            fechaEntrega,
            cantidad,
            cliente,
            importe,
        };

        console.log(pedidos);
        pedidos.push(pedido);
        localStorage.arrayPedidos = JSON.stringify(pedidos);

        //e.stopPropagation();
        //e.preventDefault();
    };

    const redireccionar = () => {
        history.push("/qChurreria");
    };

    return (
        <div className="form">
            <Form onSubmit={handleForm}>
                <h2>Cargar nuevo pedido</h2>
                <div className=" justify-content-center">
                    <div className="p-3 mr-5 ml-5 container">
                        <input
                            disabled
                            type="text"
                            id="id"
                            value={ pedidos.length ? ((pedidos[pedidos.length - 1]).numeroOrden*1) + 1 : 1 }
                        />
                    </div>
                    <div className="p-3 mr-5 ml-5 container">
                        <input type="date" placeholder="Fecha de Entrega" id="fecha" />
                    </div>
                    <div className="p-3 mr-5 ml-5 container">
                        <input type="number" placeholder="Cantidad" id="cantidad" />
                    </div>
                    <div className="p-3 mr-5 ml-5 container">
                        <input type="text" placeholder="Nombre del Cliente" id="cliente" />
                    </div>
                    <div className="p-3 mr-5 ml-5 container">
                        <input type="text" placeholder="Importe" id="importe" />
                    </div>
                </div>
                <Button className="mt-5 mb-5 mr-2 ml-2" size="lg" variant="info" type="submit">
                    Cargar pedido
        </Button>
                <Button className="mt-5 mb-5 mr-2 ml-2" size="lg" variant="info" onClick={redireccionar}>
                    Cancelar
        </Button>
            </Form>
        </div>
    );
};

export default CargarPedido;