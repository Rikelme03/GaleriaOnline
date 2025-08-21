import './Card.css'
import apagar from "../../assets/img/deletar.svg"
import editar from "../../assets/img/editar.svg"
import imgCard from "../../assets/img/oi.jpg"


export const Card = ({tituloCard}) => {
    return(
        <>
            <div className="cardImagem">
                <p>{tituloCard}</p>
                <img className="imgDoCard" src={imgCard} alt="Imagem relacionada ao card" />
                <div className="icons">
                    <img src={editar} alt="icone de caneta pra editar" />
                    <img src={apagar} alt="icone de lixeira para realizar a exclusao" />
                </div>
            </div>
        </>
    )
}