import sacola from '../../imagens/sacola.svg';
import perfil from '../../imagens/perfil.svg';
import styled from 'styled-components'

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA PRATELEIRA'];
const icones = [perfil, sacola];

///////////////////// STYLED COMPONENTS /////////////////////
const Navbar = styled.div`
    position: fixed;
    justify-content: space-around;
    text-align: center;
    align-items: center;
    flex-direction: column;
    right: 0;
    width: 50%;
    height: 70%;
    background: #fff;
    padding: 20px 0;
    opacity: 0;
    display: flex;
    transform: translateX(100%);
    transition: transform 1s ease-in-out, opacity 1s ease-in-out;

    &.visible {
        transform: translateX(0);
        opacity: 1;
    }

    &.hidden {
        transform: translateX(100%);
        opacity: 0;
    }
`;

const OpcoesVertical = styled.ul`
    display: none;
    @media screen and (max-width: 1010px){
        justify-content: space-around;
        flex-direction: column;
        display: flex;
        height: 80%;

        li a:hover {
            font-weight: bolder;
            font-size: 17px;
            color: #FC6D22;
        }

        li {
            font-size: 18px;
            justify-content: center;
            align-items: center;
            display: flex;
            text-align: center;
            height: 100%;
            padding: 0 20px;
        }

        a {
            text-decoration: none;
            color: #002f52;
            font-weight: 500;
        }
    }
`

const IconesResponsivo = styled.ul`
    display: flex;
    width: 40%;
    justify-content: space-between;
    align-items: center;

    a{
        cursor: pointer;
    }
`

/////////////////////////////////////////////////////////////

export default function ResponsiveNavbar({ isNavbarVisible }) {
    return (
        <Navbar className={`${isNavbarVisible ? 'visible' : 'hidden'}`}>
            <OpcoesVertical>
                {textoOpcoes.map((texto, index) => (
                    <li key={index}><a href='#'>{texto}</a></li>
                ))}
            </OpcoesVertical>
            <IconesResponsivo>
                {icones.map((icone, index) => (
                    <li key={index}><a href='#'><img src={icone} alt="icon"></img></a></li>
                ))}
            </IconesResponsivo>
        </Navbar>
    );
}
