import { Component } from "react";
import BarraProgresso from "./progressbars";

import BarraNavegacao from "./barraNavegacao";
import Home from "./home";
import Registros from "./registro";
import RegistroClientes from "./registroClientes";

import ListaClientes from "./listaClientes";
import ListaProdutos from "./listaProdutos";
import ListaServicos from "./listaServicos";
import ListaPets from "./listaPets";

import FormularioCadastroCliente from "./formularioCadastroCliente";
import FormularioCadastroProdutos from "./formularioCadastroProdutos";
import FormularioCadastroServicos from "./formularioCadastroServicos";
import FormularioCadastroPets from "./formularioCadastroPets";

import EdicaoClientes from "./edicaoCliente";
import EdicaoProdutos from "./edicaoProduto";
import EdicaoServicos from "./edicaoServicos";
import EdicaoPets from "./edicaoPets";

import Listagens from "./listAgens";
import ListagensMenorServicos from "./listAgensMenorServico";
import ListagensMenorProdutos from "./listAgensMenorProduto";
import ListagensMaiorValor from "./listAgensMaiorValor";
import ListagensMaiorServicos from "./listAgensMaiorServico";
import ListagensMaiorProdutos from "./listAgensMaiorProduto";

type state = {
    tela: string
}


export default class Roteador extends Component<{}, state>{
    
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Home'
        }
        this.selecionarView = this.selecionarView.bind(this)
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })
    }

    render() {
        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema="black"
            botoes={['Home', 'Clientes', 'Produtos', 'Servicos', 'Pets', 'Listagens', 'Registros']} />

        if (this.state.tela === 'Clientes') {
            return (
                <>
                    {barraNavegacao}
                    <ListaClientes tema="black" seletorView={this.selecionarView} />
                </>
            )
        }
        if (this.state.tela === 'Registros') {
            return (
                <>
                    {barraNavegacao}
                    <Registros tema="black" seletorView={this.selecionarView} />
                </>
            )
        }
        if (this.state.tela === 'Listagens') {
            return (
                <>
                    {barraNavegacao}
                    <Listagens tema="black" seletorView={this.selecionarView} />
                </>
            )
        }
        if (this.state.tela === 'Produtos') {
            return (
                <>
                    {barraNavegacao}
                    <ListaProdutos tema="black" seletorView={this.selecionarView} />
                </>
            )
        }
        if (this.state.tela === 'Servicos') {
            return (
                <>
                    {barraNavegacao}
                    <ListaServicos tema="black" seletorView={this.selecionarView} />
                </>
            )
        }
        if (this.state.tela === 'Pets') {
            return (
                <>
                    {barraNavegacao}
                    <ListaPets tema="black" seletorView={this.selecionarView} />
                </>
            )
        }
        if (this.state.tela === 'CadastroClientes') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroCliente tema="black" seletorView={this.selecionarView} />
                </>
            )
        }
        if (this.state.tela === 'CadastroProdutos') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroProdutos tema="black" seletorView={this.selecionarView} />
                </>
            )
        }
        if (this.state.tela === 'CadastroServicos') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroServicos tema="black" seletorView={this.selecionarView} />
                </>
            )
        }
        if (this.state.tela === 'CadastroPets') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroPets tema="black" seletorView={this.selecionarView} />
                </>
            )
        }
        if (this.state.tela === 'EdicaoClientes') {
            return (
                <>
                    {barraNavegacao}
                    <EdicaoClientes tema="black" seletorView={this.selecionarView} />
                </>
            )
        }
        if (this.state.tela === 'EdicaoProdutos') {
            return (
                <>
                    {barraNavegacao}
                    <EdicaoProdutos tema="black" seletorView={this.selecionarView} />
                </>
            )
        }
        if (this.state.tela === 'EdicaoServicos') {
            return (
                <>
                    {barraNavegacao}
                    <EdicaoServicos tema="black" seletorView={this.selecionarView} />
                </>
            )
        }
        if (this.state.tela === 'EdicaoPets') {
            return (
                <>
                    {barraNavegacao}
                    <EdicaoPets tema="black" seletorView={this.selecionarView} />
                </>
            )
        }
        if (this.state.tela === 'ListagemMaiorProdutos') {
            return (
                <>
                    {barraNavegacao}
                    <ListagensMaiorProdutos tema="black" seletorView={this.selecionarView} />
                </>
            )
        }
        if (this.state.tela === 'ListagemMenorProdutos') {
            return (
                <>
                    {barraNavegacao}
                    <ListagensMenorProdutos tema="black" seletorView={this.selecionarView} />
                </>
            )
        }
        if (this.state.tela === 'ListagemMaiorServicos') {
            return (
                <>
                    {barraNavegacao}
                    <ListagensMaiorServicos tema="black" seletorView={this.selecionarView} />
                </>
            )
        }
        if (this.state.tela === 'ListagemMenorServicos') {
            return (
                <>
                    {barraNavegacao}
                    <ListagensMenorServicos tema="black" seletorView={this.selecionarView} />
                </>
            )
        }
        if (this.state.tela === 'ListagemMaiorValor') {
            return (
                <>
                    {barraNavegacao}
                    <ListagensMaiorValor tema="black" seletorView={this.selecionarView} />
                </>
            )
        }
        if (this.state.tela === 'RegistroClientes') {
            return (
                <>
                    {barraNavegacao}
                    <RegistroClientes tema="black" seletorView={this.selecionarView} />
                </>
            )
        } else {
            return (
                <>
                    {barraNavegacao}
                    <Home tema="black" seletorView={this.selecionarView} />
                </>
            )
        }
    }
}