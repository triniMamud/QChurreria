import Imagen from "../QChurreria.jpeg";
const { React, useEffect, useState } = require("react");
const { Link } = require("react-router-dom");
const { Table, Container, Button } = require("react-bootstrap");

const Home = () => {

    const mañana = new Date((new Date).getTime() + (24 * 60 * 60 * 1000));
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
                <img src={Imagen} alt="QChurreria"/>
                <div>
                    <h3>Cantidad de churros a producir mañana: { pedidos
                        .filter(pedido => 
                            mañana.getDate() === (new Date(pedido.fechaEntrega+"\n")).getDate() &&
                            mañana.getMonth() === (new Date(pedido.fechaEntrega+"\n")).getMonth() &&
                            mañana.getFullYear() === (new Date(pedido.fechaEntrega+"\n")).getFullYear())
                        .reduce((a, b) => a + (b.cantidad*1 || 0), 0)
                        }
                    </h3>
                </div>
                <br />
                <Link to="/cargarPedido" style={{ textDecoration: 'none' }}>
                    <Button className="mt-5 mb-5 mr-2 ml-2" style={{backgroundColor: '#a0522d', borderColor:'#a0522d', paddingLeft: 13}} size="lg">Cargar Pedido</Button>
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
                                    <Button variant="danger" onClick={()=>eliminar(pedido.numeroOrden)}>Eliminar</Button>
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
