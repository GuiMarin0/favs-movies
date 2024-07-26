import Header from './components/header';
import ResponsiveNavbar from './components/responsiveNavbar';
import Pesquisa from './components/Pesquisa';
import ListaFilmes from './components/listaFilmes';
import { useState } from 'react';
import styled from 'styled-components'

///////////////////// STYLED COMPONENTS /////////////////////
const AppCointainer = styled.div`
  width: 100vw;
  height: 100%;
  background-image: linear-gradient(90deg, #00243f 35%, #3378a8 165%);
`
/////////////////////////////////////////////////////////////

function App() {
  const [isNavbarVisible, setNavbarVisible] = useState(false);
  const [nameMovie, setNameMovie] = useState("");

  const toggleNavbar = () => {
    setNavbarVisible(!isNavbarVisible);
  };

  return (
    <AppCointainer>
      <Header isNavbarVisible={isNavbarVisible} toggleNavbar={toggleNavbar} setNavbarVisible={setNavbarVisible} />
      {isNavbarVisible && <ResponsiveNavbar isNavbarVisible={isNavbarVisible} />}
      <Pesquisa setNameMovie={setNameMovie} />
      <ListaFilmes nameMovie={nameMovie} />
    </AppCointainer>
  );
}

export default App;
