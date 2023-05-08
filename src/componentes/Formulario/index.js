import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [marca, setMarca] = useState('')
    const [imagem, setImagem] = useState('')
    const [categoria, setCategoria] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoCarroCadastrado({
            nome,
            marca,
            imagem,
            categoria
        })
        setNome('')
        setMarca('')
        setImagem('')
        setCategoria('')

    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Fill the fields to add a car to your garage!</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Brand"
                    placeholder="Type the brand"
                    aoAlterado={valor => setMarca(valor)}
                />               
                <CampoTexto
                    obrigatorio={true}
                    label="Name"
                    placeholder="Type the car name"
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    label="Image"
                    placeholder="Insert the image url"
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Category"
                    itens={props.categorias}
                    aoAlterado={valor => setCategoria(valor)}
                    valor={categoria}
                />
                <Botao >
                    Add car
                </Botao>
            </form>
        </section>
    )
}

export default Formulario