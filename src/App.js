import Header from './components/header';
import ResponsiveNavbar from './components/responsiveNavbar';
import Pesquisa from './components/Pesquisa';
import ListaFilmes from './components/listaFilmes';
import FilmesCinema from './components/filmesCinema';
import Footer from './components/footer';
import { useState } from 'react';
import styled from 'styled-components'

///////////////////// STYLED COMPONENTS /////////////////////
const AppCointainer = styled.div`
  width: 100%;
  height: 100%;
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
      <FilmesCinema />
      <Footer />
    </AppCointainer>
  );
}

export default App;
