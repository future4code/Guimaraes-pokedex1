import styled from "styled-components";

export const ContainerPokedex = styled.div`
    background-color: #000000;
    height: 100%;
    width: 100%;
`

export const HeaderPokedex = styled.header `
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #ffffff ;
    height: 10vw;
    margin-bottom: 6vh;

    img {
        height: 8vw;
        margin-right: 10vw;
    }

    button {
        background-color: #d10101;
        min-height: 5vw;
        min-width: 8vw;
        color: #ffffff ;
        border-color: #ffffff;
        font-weight: bold;
        border-radius: 1vw;
        margin-left: 4.5vw;
        font-size: 1vw;
    }
`

export const Cards = styled.div`
    width: 100vw;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;


`