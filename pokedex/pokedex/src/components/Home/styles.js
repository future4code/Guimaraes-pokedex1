import styled from "styled-components";

export const ContainerHome = styled.div `
    background-color: #000000;
    
    @media only screen and (min-width: 375px){
    }
`

export const HeaderHome = styled.header `
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #ffffff ;
    height: 10vw;
    padding: 0 4.5vw;
    margin-bottom: 6vh;

    img {
        height: 8vw;
        margin-right: 6vw;
    }

    button {
        background-color: #d10101;
        min-height: 5vw;
        min-width: 8vw;
        color: #ffffff ;
        border-color: #ffffff;
        font-weight: bold;
        border-radius: 1vw;
        font-size: 1vw;
    }
`

export const ContainerMain = styled.main `
    width: 100vw;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`