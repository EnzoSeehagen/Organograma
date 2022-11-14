import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

  const [colaboradores, setColaboradores] = useState([])
  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    // os " ... " antes do "...colaborades", indica que estamos criando um novo Array, onde conterá os *colaboradores antigos* e adicionando os colaborades novos ("colaborador")
    setColaboradores([...colaboradores, colaborador])
  }


  return (
    <div className="App">
      <Banner/>
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      <Time nome="Programação"/>
    </div>
  );
}

export default App;
