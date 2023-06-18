/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";

type props = {
    tema: string
    seletorView: Function
}

export default class Listagens extends Component<props>{
    render() {
        let tema = this.props.tema
        return (
            <div>
                <div className="container-fluid text-center">
                    <h2>Listagens de Consumo</h2>
                </div>
                <div className="container-fluid">
                    <div className="list-group">
                        <a className="list-group-item list-group-item-action" onClick={(x) => this.props.seletorView('ListagemMaiorProdutos', x)}>
                            <div className="">Clientes com Maior Consumo de Produtos</div>
                        </a>
                        <a className="list-group-item list-group-item-action" onClick={(x) => this.props.seletorView('ListagemMenorProdutos', x)}>
                            <div>Clientes com Menor Consumo de Produtos</div>
                        </a>
                        <a className="list-group-item list-group-item-action" onClick={(x) => this.props.seletorView('ListagemMaiorServicos', x)}>
                            <div>Clientes com Maior Consumo de Serviços</div>
                        </a>
                        <a className="list-group-item list-group-item-action" onClick={(x) => this.props.seletorView('ListagemMenorServicos', x)}>
                            <div>Clientes com Menor Consumo de Serviços</div>
                        </a>
                        <a className="list-group-item list-group-item-action" onClick={(x) => this.props.seletorView('ListagemMaiorValor', x)}>
                            <div>Clientes com Maior Valor Consumido</div>
                        </a>
                    </div>
                </div><br />
            </div>

        )
    }
}