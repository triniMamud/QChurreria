const { React } = require("react");
const { useHistory } = require("react-router");
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
    };

    const redireccionar = () => {
        history.push("/qChurreria");
    };

    return (
        <div id="form" className="justify-content-center">
            <Form classname="justify-content-center" onSubmit={handleForm}>
                <h2 className="pb-20">Cargar nuevo pedido</h2>
                <div className="justify-content-center">
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
                <div>
                    <Button className="mt-5 mb-5 mr-2 ml-2 btn btn-danger" size="lg" onClick={redireccionar}>
                        Cancelar
                    </Button>
                    <Button className="mt-5 mb-5 mr-2 ml-2 btn btn-success" size="lg" type="submit">
                        Cargar pedido
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default CargarPedido;