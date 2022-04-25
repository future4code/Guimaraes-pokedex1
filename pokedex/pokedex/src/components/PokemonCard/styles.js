import styled from 'styled-components';

export const ContainerCard = styled.div `
    display: grid;
    grid-template-rows: 80% 20%;
    height: 25vw;
    width: 25vw;
    margin: 2vw;
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
    height: 15vw;
`

export const ContainerButtons = styled.div `
    display: flex;
    width: 80%;
    margin-bottom: 5vw;
    align-self: center;
    justify-self: center;
    justify-content: space-between;
  
    button {
        background-color: #000000;
        height: 5vw;
        width: 8vw;
        color: #ffffff ;
        border-color: #ffffff;
        font-size: 1vw;
        font-weight: bold;
        padding: 1vw;
        border-radius: 1vw;
    }
`

