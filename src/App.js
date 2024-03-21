import Header from './componentes/Header'
import Pesquisa from './componentes/Pesquisa'
import styled from 'styled-components'
import UltimosLancamentos from './componentes/UltimosLancamentos';

// Styled Components, utiliza crases ``
const AppContainer = styled.div`// Conteinerização, elemento que a gente quer recriar, tag html
    width: 100vw; // toda largura da tela
    height: 100vh; // toda altura da tela
    background-image: linear-gradient(90deg,#002F52 35%,#326589 165%);
`

function App() {
  return (
    <AppContainer>
      <Header />
      <Pesquisa />
      <UltimosLancamentos />
    </AppContainer>
  );
}

export default App
