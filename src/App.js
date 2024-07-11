import './App.css';
import Header from './components/header';
import ResponsiveNavbar from './components/responsiveNavbar';
import { useState, useEffect } from 'react';

function App() {
  const [isNavbarVisible, setNavbarVisible] = useState(false);

  const toggleNavbar = () => {
    setNavbarVisible(!isNavbarVisible);
  };
  return (
    <div className='App'>
      <Header isNavbarVisible={isNavbarVisible} toggleNavbar={toggleNavbar} setNavbarVisible={setNavbarVisible} />
      {isNavbarVisible && <ResponsiveNavbar isNavbarVisible={isNavbarVisible} />}

    </div>
  );
}

export default App;
