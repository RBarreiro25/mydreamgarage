import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Categoria from './componentes/Categoria';

function App() {

  const categorias = [
    {
      nome: 'Hatch',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Sedan',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'SUV',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Pickup',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Station Wagon',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE5F5'
    },
    {
      nome: 'Cabriolet',                       
      corPrimaria: '#FEBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Coupe',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    },
    {
      nome: 'Sports Car', 
      corPrimaria: 'grey',
      corSecundaria: 'lightgrey'
    },
  ]

  const [carros, setCarros] = useState([])

  const aoNovoCarroAdicionado = (carro) => {
    console.log(carro)
    setCarros([...carros, carro])
  }
  
  return (
    <div className="App">
      <Banner />
      <Formulario categorias={categorias.map(categoria => categoria.nome)} aoCarroCadastrado={carro => aoNovoCarroAdicionado(carro) } />
      {categorias.map(categoria => <Categoria
        key={categoria.nome}
        nome={categoria.nome}
        corPrimaria={categoria.corPrimaria}
        corSecundaria={categoria.corSecundaria}
        carros={carros.filter(carro => carro.categoria === categoria.nome)}
        />)}
    </div>
  );
}

export default App;
