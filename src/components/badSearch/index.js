import styled from "styled-components"
import bad_request_movie from "../../imagens/bad_request_movie2.svg"

///////////////////// STYLED COMPONENTS /////////////////////
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Content = styled.div`
    width: 89%;
    text-align: center;

    h3{
        text-align: center;
        color: #FFF;
    }
`



////////////////////////////////////////////////////////////

export default function BadSearch() {

    return (
        <Container>
            <Content>
                <img src={bad_request_movie} alt="nenhum filme encontrado" />
                <h3>Nenhum filme encontrado, nos desculpe!</h3>
            </Content>
        </Container>
    )
}