import { Component } from "react";
import BarraProgresso from "./progressbars";


type props = {
    tema: string
    seletorView: Function
}

export default class RegistroClientes extends Component<props>{
    render() {
        let tema = this.props.tema
        return (
            <div>
                <div className="text-center">
                    <div className="container-fluid text-center">
                        <h2>Registro de Consumo</h2>
                    </div><br />
                    <div>
                        <h4 className="fw-bold">Nome do Cliente</h4>
                        <div>ID | CPF</div>
                    </div><br />
                    <div>
                        <p>Nome do Produto</p>
                        <BarraProgresso now={40} variant={"success"} />
                    </div>
                    <div>
                        <p>Nome do Produto</p>
                        <BarraProgresso now={35} variant={"info"} />
                    </div>
                    <div>
                        <p>Nome do Produto</p>
                        <BarraProgresso now={15} variant={"danger"} />
                    </div>
                </div><br />
                <div className="d-flex justify-content-center">
                    <button className="btn btn-outline-dark">
                        <a onClick={(x) => this.props.seletorView('EdicaoClientes', x)}>Editar Cliente</a>
                    </button>
                </div>
            </div>

        )
    }
}