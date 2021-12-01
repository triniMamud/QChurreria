const { React, Component, useState } = require('react');
const { pedidos } = require('./Home');
const { Form, Button } = require('react-bootstrap');

class CargarPedido extends Component {

    constructor(props) {
        super(props);

        this.redireccionar = this.redireccionar.bind(this);

        this.pedido = {
            id: "",
            fecha: "",
            cantidad: "",
            cliente: "",
            importe: ""
        }

        this.pedidos = JSON.parse(localStorage.getItem('arrayPedidos'));
        
    }

    handleDatos = (event) => {
        this.setState({
            value: event.target.value
        })
    };

    handleForm = (e) => {
        const id = document.getElementById("id").value;
        const fecha = document.getElementById("fecha").value;
        const cantidad  = document.getElementById("cantidad").value;
        const cliente = document.getElementById("cliente").value;
        const importe = document.getElementById("importe").value;

        this.pedido.id = id;
        this.pedido.fecha = fecha;
        this.pedido.cantidad = cantidad;
        this.pedido.cliente = cliente;
        this.pedido.importe = importe;


        console.log(this.pedido);

        this.pedidos.push(this.pedido);

        //e.stopPropagation();
        //e.preventDefault();
    };

    redireccionar = () => {
        this.props.history.push('/cargarPedido');
    }

    render () {
        return (
            <div className="form">
                <Form onSubmit={this.handleForm}>
                    <h2>Cargar nuevo pedido</h2>
                    <div className=" justify-content-center">
                        <div className="p-3 mr-5 ml-5 container">
                            <input disabled={true} type= "text" id="id" value={this.pedidos[this.pedidos.length-1].numeroOrden+1 }/>
                        </div>
                        <div className="p-3 mr-5 ml-5 container">
                            <input type="date" placeholder="Fecha de Entrega" id="fecha" onChange={this.handleDatos}/>
                        </div>
                        <div className="p-3 mr-5 ml-5 container">
                            <input type="number" placeholder="Cantidad" id="cantidad" onChange={this.handleDatos}/>
                        </div>
                        <div className="p-3 mr-5 ml-5 container">
                            <input type="text" placeholder="Nombre del Cliente" id="cliente" onChange={this.handleDatos}/>
                        </div>
                        <div className="p-3 mr-5 ml-5 container">
                            <input type="text" placeholder="Importe" id="importe" onChange={this.handleDatos}/>
                        </div>
                    </div>
                    <Button className="mt-5 mb-5 mr-2 ml-2" size="lg" variant="info" type="submit">Cargar pedido</Button>
                    <Button className="mt-5 mb-5 mr-2 ml-2" size="lg" variant="info" onClick={this.redireccionar}> Cancelar </Button>
                </Form>
            </div>
        )
    }
}

export default CargarPedido;