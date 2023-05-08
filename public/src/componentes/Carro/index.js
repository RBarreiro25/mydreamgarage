import './Carro.css'

const Carro = ({ marca, nome, imagem, corDeFundo }) => {
    return (<div className='carro'>
        <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
            <img src={imagem} alt={nome} />
        </div>
        <div className='rodape'>
            <h4>{marca}</h4>
            <h5>{nome}</h5>
        </div>
    </div>

    )
}

export default Carro