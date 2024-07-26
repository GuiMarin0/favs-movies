import styled from 'styled-components'
import logo from '../../imagens/logo.svg'

///////////////////// STYLED COMPONENTS /////////////////////
const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
    color: #002f52;
`

const ImagemLogo = styled.img`
    margin-right: 10px;
`

const TextoLogo = styled.p`
    padding-bottom: 7px;
`
/////////////////////////////////////////////////////////////

export default function Logo() {
    return (
        <LogoContainer>
            <ImagemLogo src={logo} alt='logo'></ImagemLogo>
            <TextoLogo><strong>Favs</strong>Movies</TextoLogo>
        </LogoContainer>
    )
}