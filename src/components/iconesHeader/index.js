import perfil from '../../imagens/perfil.svg';
import sacola from '../../imagens/sacola.svg';
import menu from '../../imagens/menu.svg';
import fechar from '../../imagens/fechar.svg';
import './estilo.css';

const icones = [perfil, sacola];

export default function IconesHeader({ toggleNavbar, isNavbarVisible }) {
    return (
        <ul className='icones'>
            {icones.map((icone, index) => (
                <li className='icone' key={index}><img src={icone} alt="icon"></img></li>
            ))}
            <li className={`burger ${isNavbarVisible ? 'hidden' : 'visible'}`} onClick={toggleNavbar}>
                <img src={menu} alt="open menu"></img>
            </li>
            <li className={`fechar ${isNavbarVisible ? 'visible' : 'hidden'}`} onClick={toggleNavbar}>
                <img src={fechar} alt="close menu"></img>
            </li>
        </ul>
    );
}