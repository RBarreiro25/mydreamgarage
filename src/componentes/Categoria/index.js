import Carro from '../Carro'
import './Categoria.css'

const Categoria = (props) => {
    const css = { backgroundColor: props.corSecundaria }

    return (
        (props.carros.length > 0) ? <section className='categoria' style={css} >
            <h3 style={{ borderColor: props.corPrimaria }} >{props.nome}</h3>
            <div className='carros'>
               {props.carros.map( carro => <Carro corDeFundo={props.corPrimaria} marca={carro.marca} nome={carro.nome} imagem={carro.imagem} key={carro.nome} /> )} 
            </div>
        </section>
        : ''
    )
}

export default Categoria