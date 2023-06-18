/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";

type props = {
    tema: string
    seletorView: Function
}

export default class ListagensMaiorValor extends Component<props>{
    render() {
        let tema = this.props.tema
        return (
            <div>
                <div className="container-fluid text-center">
                    <h2>Clientes com Maior Valor Consumido</h2>
                </div><br />
                <div className="container-fluid">
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" />
                        <button onClick={(x) => this.props.seletorView('ListagemMaiorValor', x)}
                            className="btn btn-outline-success" type="submit">Search</button>
                    </form><br />
                </div>
                <div className="container-fluid">
                    <div className="list-group">
                        <a className="list-group-item list-group-item-action" onClick={(x) => this.props.seletorView('RegistroClientes', x)}>
                            <div>
                                <div className="fw-bold">Nome do Cliente | ID </div>
                                Valor Gasto
                            </div>
                        </a>
                        <a className="list-group-item list-group-item-action" onClick={(x) => this.props.seletorView('RegistroClientes', x)}>
                            <div>
                                <div className="fw-bold">Nome do Cliente | ID </div>
                                Valor Gasto
                            </div>
                        </a>
                        <a className="list-group-item list-group-item-action" onClick={(x) => this.props.seletorView('RegistroClientes', x)}>
                            <div>
                                <div className="fw-bold">Nome do Cliente | ID </div>
                                Valor Gasto
                            </div>
                        </a>
                        <a className="list-group-item list-group-item-action" onClick={(x) => this.props.seletorView('RegistroClientes', x)}>
                            <div>
                                <div className="fw-bold">Nome do Cliente | ID </div>
                                Valor Gasto
                            </div>
                        </a>
                        <a className="list-group-item list-group-item-action" onClick={(x) => this.props.seletorView('RegistroClientes', x)}>
                            <div>
                                <div className="fw-bold">Nome do Cliente | ID </div>
                                Valor Gasto
                            </div>
                        </a>
                        <a className="list-group-item list-group-item-action" onClick={(x) => this.props.seletorView('RegistroClientes', x)}>
                            <div>
                                <div className="fw-bold">Nome do Cliente | ID </div>
                                Valor Gasto
                            </div>
                        </a>
                        <a className="list-group-item list-group-item-action" onClick={(x) => this.props.seletorView('RegistroClientes', x)}>
                            <div>
                                <div className="fw-bold">Nome do Cliente | ID </div>
                                Valor Gasto
                            </div>
                        </a>
                        <a className="list-group-item list-group-item-action" onClick={(x) => this.props.seletorView('RegistroClientes', x)}>
                            <div>
                                <div className="fw-bold">Nome do Cliente | ID </div>
                                Valor Gasto
                            </div>
                        </a>
                        <a className="list-group-item list-group-item-action" onClick={(x) => this.props.seletorView('RegistroClientes', x)}>
                            <div>
                                <div className="fw-bold">Nome do Cliente | ID </div>
                                Valor Gasto
                            </div>
                        </a>
                        <a className="list-group-item list-group-item-action" onClick={(x) => this.props.seletorView('RegistroClientes', x)}>
                            <div>
                                <div className="fw-bold">Nome do Cliente | ID </div>
                                Valor Gasto
                            </div>
                        </a>
                    </div>
                </div><br />
                <div className="input-group mb-3 d-flex justify-content-center">
                    <button className="btn btn-outline-dark" type="button"
                        onClick={(x) => this.props.seletorView('Listagens', x)}>Voltar</button>
                </div>
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        <li className="page-item disabled">
                            <a className="page-link" onClick={(x) => this.props.seletorView('ListagemMaiorValor', x)}>Previous</a>
                        </li>
                        <li className="page-item"><a className="page-link" onClick={(x) => this.props.seletorView('ListagemMaiorValor', x)}>1</a></li>
                        <li className="page-item"><a className="page-link" onClick={(x) => this.props.seletorView('ListagemMaiorValor', x)}>2</a></li>
                        <li className="page-item"><a className="page-link" onClick={(x) => this.props.seletorView('ListagemMaiorValor', x)}>3</a></li>
                        <li className="">
                            <a className="page-link" onClick={(x) => this.props.seletorView('ListagemMaiorValor', x)}>Next</a>
                        </li>
                    </ul>
                </nav>
            </div>

        )
    }
}