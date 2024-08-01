import styled from 'styled-components'
import logo from '../../imagens/logo.svg'

///////////////////// STYLED COMPONENTS /////////////////////
const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
    color: ${props => props.cor};
`

const ImagemLogo = styled.img`
    margin-right: 10px;
`

const TextoLogo = styled.p`
    padding-bottom: 7px;
`
/////////////////////////////////////////////////////////////

export default function Logo({ cor = '#002f52' }) {
    return (
        <LogoContainer cor={cor}>
            <ImagemLogo src={logo} alt='logo'></ImagemLogo>
            <TextoLogo><strong>Favs</strong>Movies</TextoLogo>
        </LogoContainer>
    )
}