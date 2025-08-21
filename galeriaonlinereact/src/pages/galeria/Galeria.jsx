import React from 'react'
import './Galeria.css'
import icon from "../../assets/img/enviar.svg"
import Botao from '../../components/botao/Botao'
import { Card } from '../../components/card/Card'

function deletarImagem() {
    try {
        
    } catch (error) {
        
    }
}

const Galeria = () => {
    return (
        <>
            <h1 className='tituloGaleria'>Galeria Online</h1>

            <form className="formulario" onSubmit="">

                <div className="campoNome">
                    <label>Nome</label>
                    <input type="text" className="inputNome" />
                </div>

                <div className="campoImagem">
                    <label className="arquivoLabel">
                        <i><img src={icon} alt="icone de upload de imagem" /></i>
                        <input type="file" className="arquivoInput" />

                    </label>
                </div>
                <Botao nomeBotao="Cadastrar" />
            </form>

            <div className="campoCards">
                <Card tituloCard="Aurora Bohel"/>
                <Card tituloCard="Aurora Bohel"/>
                <Card tituloCard="Aurora Bohel"/>
                <Card tituloCard="Aurora Bohel"/>
                <Card tituloCard="Aurora Bohel"/>
                <Card tituloCard="Aurora Bohel"/>
                <Card tituloCard="Aurora Bohel"/>
                <Card tituloCard="Aurora Bohel"/>
                <Card tituloCard="Aurora Bohel"/>
                <Card tituloCard="Aurora Bohel"/>
                <Card tituloCard="Aurora Bohel"/>
                <Card tituloCard="Aurora Bohel"/>
                <Card tituloCard="Aurora Bohel"/>
                <Card tituloCard="Aurora Bohel"/>
                <Card tituloCard="Aurora Bohel"/>
                <Card tituloCard="Aurora Bohel"/>
                <Card tituloCard="Aurora Bohel"/>
                <Card tituloCard="Aurora Bohel"/>
                <Card tituloCard="Aurora Bohel"/>
                <Card tituloCard="Aurora Bohel"/>
                <Card tituloCard="Aurora Bohel"/>
                <Card tituloCard="Aurora Bohel"/>
            </div>

        </>
    )
}

export default Galeria;