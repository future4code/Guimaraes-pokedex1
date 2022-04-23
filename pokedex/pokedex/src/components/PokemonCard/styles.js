import styled from 'styled-components';

export const ContainerCard = styled.div `
    display: grid;
    grid-template-rows: 80% 20%;
    height: 45vh;
    width: 25vw;
    margin: 20px;
    border: 2px solid #ffffff ;
    border-radius: 2vw;
    background-image: linear-gradient(#F05644, #D10101, #991400 );
`
export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageCard = styled.img`
    height: 80%;
    /* border: 1px solid; */
`

export const ContainerButtons = styled.div `
    /* border: 1px solid; */
    display: flex;
    width: 100%;
    margin-bottom: 40px;
    align-self: center;
  
    button {
        background-color: #000000;
        min-height: 10vh;
        min-width: 8vw;
        color: #ffffff ;
        border-color: #ffffff;
        font-weight: bold;
        padding: 10px;
        border-radius: 15px;
    }
`