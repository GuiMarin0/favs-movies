import styled from 'styled-components';

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA PRATELEIRA'];

///////////////////// STYLED COMPONENTS /////////////////////
const Opcoes = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-left: 40px;

    @media screen and (max-width: 1010px) {
        display: none;
}
`

const Opcao = styled.li`
    list-style: none;
    font-size: 18px;
    justify-content: center;
    align-items: center;
    display: flex;
    text-align: center;
    height: 100%;
    padding: 0 20px;
`

const OpcaoLink = styled.a`
    text-decoration: none;
    color: #002f52;
    font-weight: 500;

    &:hover{
        font-weight: bolder;
        font-size: 17px;
        color: #FC6D22;
    }
`

/////////////////////////////////////////////////////////////

export default function OpcoesHeader() {
    return (
        <Opcoes>
            {textoOpcoes.map((texto) => (
                <Opcao><OpcaoLink href='#'>{texto}</OpcaoLink></Opcao>
            ))}
        </Opcoes>
    )
}