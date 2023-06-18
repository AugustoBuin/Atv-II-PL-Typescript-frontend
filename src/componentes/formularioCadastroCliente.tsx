import { Component } from "react";

type props = {
    tema: string
    seletorView: Function
}

export default class FormularioCadastroCliente extends Component<props> {

    render() {
        let tema = this.props.tema
        return (
            <div>
                <h2 className="text-center">Cadastro de Clientes</h2>
                <div className="container-fluid">
                    <form>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Nome" />
                        </div>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Nome social" />
                        </div>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="CPF" />
                        </div>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="RG" />
                        </div>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Telefone" />
                        </div>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Pets" />
                        </div>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="E-mail" />
                        </div>
                        <div className="input-group mb-3 d-flex justify-content-center">
                            <button className="btn btn-outline-dark" type="button"
                                onClick={(x) => this.props.seletorView('Clientes', x)}>Cadastrar</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}