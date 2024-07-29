import styled, { keyframes } from "styled-components";

// Animação de rotação
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Estilos para o container
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh; /* Full viewport height */
`;

// Estilos para o spinner
const Spinner = styled.div`
  border: 8px solid rgba(0, 0, 0, 0.1); /* Light gray background */
  border-left: 8px solid #FFF; /* White spinner */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 1s linear infinite;
`;

export default function Loading() {
    return (
        <Container>
            <Spinner />
        </Container>
    );
}
