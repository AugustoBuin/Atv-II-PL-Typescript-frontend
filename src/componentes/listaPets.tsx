import { Component } from "react";

type props = {
    tema: string,
    seletorView: Function
}

export default class ListaPets extends Component<props>{
    render() {
        let tema = this.props.tema
        return (
            <div>
                <h2 className="text-center">Lista de Pets</h2><br />

                <div className="container ">
                    <div className="row justify-content-between">
                        <div className="col">
                            <button className="btn btn-outline-dark">
                                <a onClick={(x) => this.props.seletorView('CadastroPets', x)}>Cadastro</a>
                            </button>
                        </div>
                        <div className="col">
                            <div className="container-fluid">
                                <form className="d-flex" role="search">
                                    <input className="form-control me-2" type="search" placeholder="Search" />
                                    <button onClick={(x) => this.props.seletorView('Pets', x)}
                                        className="btn btn-outline-success" type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div><br />

                <div className="container-fluid">
                    <div className="list-group">
                        <a className="list-group-item list-group-item-action" onClick={(x) => this.props.seletorView('EdicaoPets', x)}>
                            <div className="fw-bold">Nome do Pet</div>
                            ID | Tipo | Dono
                        </a>
                        <a className="list-group-item list-group-item-action" onClick={(x) => this.props.seletorView('EdicaoPets', x)}>
                            <div className="fw-bold">Nome do Pet</div>
                            ID | Tipo | Dono
                        </a>
                        <a className="list-group-item list-group-item-action" onClick={(x) => this.props.seletorView('EdicaoPets', x)}>
                            <div className="fw-bold">Nome do Pet</div>
                            ID | Tipo | Dono
                        </a>
                        <a className="list-group-item list-group-item-action" onClick={(x) => this.props.seletorView('EdicaoPets', x)}>
                            <div className="fw-bold">Nome do Pet</div>
                            ID | Tipo | Dono
                        </a>
                        <a className="list-group-item list-group-item-action" onClick={(x) => this.props.seletorView('EdicaoPets', x)}>
                            <div className="fw-bold">Nome do Pet</div>
                            ID | Tipo | Dono
                        </a>
                        <a className="list-group-item list-group-item-action" onClick={(x) => this.props.seletorView('EdicaoPets', x)}>
                            <div className="fw-bold">Nome do Pet</div>
                            ID | Tipo | Dono
                        </a>
                    </div>
                </div><br />

                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        <li className="page-item disabled">
                            <a className="page-link" onClick={(x) => this.props.seletorView('Pets', x)}>Previous</a>
                        </li>
                        <li className="page-item"><a className="page-link" onClick={(x) => this.props.seletorView('Pets', x)}>1</a></li>
                        <li className="page-item"><a className="page-link" onClick={(x) => this.props.seletorView('Pets', x)}>2</a></li>
                        <li className="page-item"><a className="page-link" onClick={(x) => this.props.seletorView('Pets', x)}>3</a></li>
                        <li className="">
                            <a className="page-link" onClick={(x) => this.props.seletorView('Pets', x)}>Next</a>
                        </li>
                    </ul>
                </nav>
            </div>

        )
    }
}