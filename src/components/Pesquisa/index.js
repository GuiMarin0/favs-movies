import styled from "styled-components"
import { Input } from "../Input"

///////////////////// STYLED COMPONENTS /////////////////////
const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
`
const Content = styled.div`
    width: 89%;
    color: #FFF;
    padding: 5% 0px;
    text-align: center;
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;

    @media screen and (max-width:510px){
        font-size: 26px   
    }

    @media screen and (max-width:368px){
        font-size: 20px   
    }

    @media screen and (min-width:2560px){
        font-size: 66px   
    }
`

const Subtitulo = styled.h3`
    font-size:16px;
    font-weight: 500;
    margin-bottom: 5vh;

    @media screen and (max-width:368px){
        font-size: 12px   
    }

    @media screen and (min-width:2560px){
        font-size: 36px   
    }
`
/////////////////////////////////////////////////////////////

export default function Pesquisa({ setNameMovie }) {
    return (
        <Container>
            <Content>
                <Titulo>Ja sabe por onde começar?</Titulo>
                <Subtitulo>Encontre seu filme em nossa prateleira</Subtitulo>
                <Input
                    placeholder="Procure aqui seu próximo filme"

                    onChange={event => setNameMovie(event.target.value)}
                />
            </Content>
        </Container>

    )
}