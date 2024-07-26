import perfil from '../../imagens/perfil.svg';
import sacola from '../../imagens/sacola.svg';
import menu from '../../imagens/menu.svg';
import fechar from '../../imagens/fechar.svg';
import styled from 'styled-components';

const icones = [perfil, sacola];

///////////////////// STYLED COMPONENTS /////////////////////
const Icones = styled.ul`
    display: flex;
    align-items: center;
    position: relative;
`

const Icone = styled.li`
    margin-right: 40px;
    width: 25px;
    cursor: pointer;
    list-style: none;

    @media screen and (max-width: 1010px){
        display: none;
    }

    
`

const BurgerIcon = styled.li`
    opacity: 0;
    position: absolute;
    right: 0;
    display: none;
    cursor: pointer;
    transform: rotate(45deg) translate(-4px, -5px);
    transition: opacity 0.2s ease-out, transform 0.2s ease-out;
    list-style: none;

    &.visible {
        display: none;
        opacity: 1;
        transform: rotate(0deg);

        @media screen and (max-width: 1010px) {
            display: block;
    }

    &.hidden {
        pointer-events: none;
    }

}
`;

const FecharIcon = styled.li`
    opacity: 0;
    position: absolute;
    right: 0;
    cursor: pointer;
    transform: rotate(-45deg);
    transition: opacity 0.2s ease-out, transform 0.2s ease-out;
    list-style: none;

    &.visible {
        opacity: 1;
        transform: rotate(0deg);
    }

    &.hidden {
        pointer-events: none;
    }
`;
/////////////////////////////////////////////////////////////

export default function IconesHeader({ toggleNavbar, isNavbarVisible }) {
    return (
        <Icones>
            {icones.map((icone, index) => (
                <Icone key={index}><img src={icone} alt="icon"></img></Icone>
            ))}
            <BurgerIcon className={`${isNavbarVisible ? 'hidden' : 'visible'}`} onClick={toggleNavbar}>
                <img src={menu} alt="open menu"></img>
            </BurgerIcon>
            <FecharIcon className={`${isNavbarVisible ? 'visible' : 'hidden'}`} onClick={toggleNavbar}>
                <img src={fechar} alt="close menu"></img>
            </FecharIcon>
        </Icones>
    );
}