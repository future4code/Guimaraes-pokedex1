import styled from "styled-components";

export const ContainerPokedex = styled.div`
background-color: #000000;
height: 100vh;
width: 100vw;
margin: 0px;
padding: 0%;
`

export const HeaderPokedex = styled.header `
    display: flex;
    align-items: center;
    border-bottom: 2px solid #ffffff ;
    height: 120px;
    margin-bottom: 6vh;

    div:nth-child(1) {
        display: flex;
        width: 20%;
    }

    div:nth-child(2) {
        align-self: center;
        justify-self: center;
        margin-right: 30vw;
        margin-left: 21vw;
        img {
        height: 100px;
        }
    }

    button {
        background-color: #d10101;
        min-height: 10vh;
        min-width: 8vw;
        color: #ffffff ;
        border-color: #ffffff;
        font-weight: bold;
        padding: 10px;
        border-radius: 15px;
        margin-left: 6vw;
    }
`

export const Cards = styled.div`
    width: 100vw;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;


`