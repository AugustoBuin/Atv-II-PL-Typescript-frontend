import { Component } from "react";

type props = {
    tema: string
    seletorView: Function
}

export default class EdicaoProdutos extends Component<props> {

    render() {
        let tema = this.props.tema
        return (
            <div>
                <h2 className="text-center">Edição de Produtos</h2>
                <div className="container-fluid">
                    <form>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Nome" />
                        </div>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Preço" />
                        </div>
                        <div className="input-group mb-3 d-flex justify-content-center">
                            <button className="btn btn-outline-danger" type="button"
                                onClick={(x) => this.props.seletorView('Produtos', x)}>Deletar</button>
                            <button className="btn btn-outline-dark" type="button"
                                onClick={(x) => this.props.seletorView('Produtos', x)}>Alterar</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}