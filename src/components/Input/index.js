import styled from "styled-components";

export const Input = styled.input`
    order: 1px solid #FFF;
    background: transparent;
    border: 2px solid #FFF;
    padding: 20px 100px;
    border-radius: 50px;
    width: 50%;
    color: #FFF;
    font-size: 16px;
    margin-bottom: 10px;
    text-align: center;

    &::placeholder{
        color: #FFF;
        font-size: 16px;
    }

    @media screen and (max-width: 740px){
        width:100%;
        padding: 20px 0px;
    }

    @media screen and (min-width:2560px){
        &::placeholder{
            font-size: 26px;
        }

        padding: px 100px;
    }
` 