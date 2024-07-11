import sacola from '../../imagens/sacola.svg';
import perfil from '../../imagens/perfil.svg';
import './estilo.css';

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA PRATELEIRA'];
const icones = [perfil, sacola];

export default function ResponsiveNavbar({ isNavbarVisible }) {
    return (
        <div className={`navbar ${isNavbarVisible ? 'visible' : 'hidden'}`}>
            <ul className='opcoesVertical'>
                {textoOpcoes.map((texto, index) => (
                    <li key={index}><a href='#'>{texto}</a></li>
                ))}
            </ul>
            <ul className='iconesResponsivo'>
                {icones.map((icone, index) => (
                    <li className='iconeResponsivo' key={index}><img src={icone} alt="icon"></img></li>
                ))}
            </ul>
        </div>
    );
}
