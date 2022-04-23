import styled from "styled-components";

export const ContainerHome = styled.div `
    background-color: #000000;
`

export const HeaderHome = styled.header `
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #ffffff ;
    height: 120px;
    margin-bottom: 40px;

    img {
        height: 100px;
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
        margin-left: 60px;
    }
`

export const ContainerMain = styled.main `
    /* padding: 30px; */
    /* display: flex;
    align-items: center;
    justify-content: center; */

    width: 100vw;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`