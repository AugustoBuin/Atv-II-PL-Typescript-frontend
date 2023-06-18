import { Component } from "react";

type props = {
    tema: string
    seletorView: Function
}

export default class FormularioCadastroPets extends Component<props> {

    render() {
        let tema = this.props.tema
        return (
            <div>
                <h2 className="text-center">Cadastro de Pets</h2>
                <div className="container-fluid">
                    <form>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Nome" />
                        </div>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Tipo" />
                        </div>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Raça" />
                        </div>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Gênero" />
                        </div>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Dono" />
                        </div>
                        <div className="input-group mb-3">
                            <textarea className="form-control" rows={3} placeholder="Anotações" />
                        </div>
                        <div className="input-group mb-3 d-flex justify-content-center">
                            <button className="btn btn-outline-dark" type="button"
                                onClick={(x) => this.props.seletorView('Pets', x)}>Cadastrar</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}