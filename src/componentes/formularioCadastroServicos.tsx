import { Component } from "react";

type props = {
    tema: string
    seletorView: Function
}

export default class FormularioCadastroServicos extends Component<props> {

    render() {
        let tema = this.props.tema
        return (
            <div>
                <h2 className="text-center">Cadastro de Serviços</h2>
                <div className="container-fluid">
                    <form>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Nome" />
                        </div>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Preço" />
                        </div>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Tipo" />
                        </div>
                        <div className="input-group mb-3 d-flex justify-content-center">
                            <button className="btn btn-outline-dark" type="button"
                                onClick={(x) => this.props.seletorView('Servicos', x)}>Cadastrar</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}