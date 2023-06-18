import { Component } from "react";
import logo from '../images/logo.png'

type props = {
    tema: string,
    seletorView: Function
}

export default class Home extends Component<props>{
    render() {
        let tema = this.props.tema
        return (
            <div>
                <div>
                    <h1 className="text-center">Bem Vindo à Pet Lovers</h1><br />
                </div>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-outline-dark">
                        <a onClick={(x) => this.props.seletorView('Clientes', x)}>Clientes</a>
                    </button>
                    <button className="btn btn-outline-dark">
                        <a onClick={(x) => this.props.seletorView('Produtos', x)}>Produtos</a>
                    </button>
                    <button className="btn btn-outline-dark">
                        <a onClick={(x) => this.props.seletorView('Servicos', x)}>Serviços</a>
                    </button>
                    <button className="btn btn-outline-dark">
                        <a onClick={(x) => this.props.seletorView('Pets', x)}>Pets</a>
                    </button>
                    <button className="btn btn-outline-dark">
                        <a onClick={(x) => this.props.seletorView('Listagens', x)}>Listagens</a>
                    </button>
                    <button className="btn btn-outline-dark">
                        <a onClick={(x) => this.props.seletorView('Registros', x)}>Registros</a>
                    </button>
                </div><br />
                <div>
                    <img src={logo} className="rounded mx-auto d-block" alt="logo"/>
                </div>
                <div>
                    <h3 className="text-center">Curta Pet Lovers. Curta seu pet como nunca antes!</h3>
                </div>
            </div>

        )
    }
}