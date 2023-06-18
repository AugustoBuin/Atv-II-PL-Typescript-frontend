import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';

type Props = {
    tema: string;
    seletorView: Function;
};

type State = {
    selectedView: string;
};

export default class Registros extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            selectedView: 'Produtos', // Initial selected view
        };
    }

    handleButtonClick = (view: string) => {
        this.setState({ selectedView: view });
    };

    render() {
        const { tema } = this.props;
        const { selectedView } = this.state;

        let progressBar1;
        let progressBar2;
        let progressBar3;
        let texto;

        if (selectedView === 'Produtos') {
            progressBar1 = <ProgressBar now={60} variant="success" />;
            progressBar2 = <ProgressBar now={40} variant="info" />;
            progressBar3 = <ProgressBar now={65} variant="danger" />;
            texto = <p className='text-center'>Nome do Produto</p>;
        } else if (selectedView === 'Serviços') {
            progressBar1 = <ProgressBar now={30} variant="success" />;
            progressBar2 = <ProgressBar now={55} variant="info" />;
            progressBar3 = <ProgressBar now={70} variant="danger" />;
            texto = <p className='text-center'>Nome do Serviço</p>;
        }

        return (
            <div>
                <div className="text-center">
                    <div className="container-fluid text-center">
                        <h2>Registros de Consumo</h2>
                    </div>
                    <div>
                        <button
                            type="button"
                            className="btn btn-outline-dark"
                            onClick={() => this.handleButtonClick('Produtos')}>
                            Produtos
                        </button>
                        <button
                            type="button"
                            className="btn btn-outline-dark"
                            onClick={() => this.handleButtonClick('Serviços')}>
                            Serviços
                        </button>
                    </div>
                </div><br />
                <div>
                    {texto} <br />
                    {progressBar1}
                </div><br />
                <div>
                    {texto} <br />
                    {progressBar2}
                </div><br />
                <div>
                    {texto} <br />
                    {progressBar3}
                </div><br />
            </div>
        );
    }
}
