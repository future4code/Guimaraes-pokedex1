import styled from 'styled-components';

export const ContainerCard = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 5px solid #A1B5FF ;
    border-radius: 25px;
    background-image: linear-gradient(#FFE24F, #EBC507, #9E8400 );
    height: 300px;
    width: 300px;
`

export const ImageCard = styled.img`
    height: 250px;
`

export const ContainerButtons = styled.div `
    display: flex;
    justify-content: space-between;
    width: 280px;
    margin-bottom: 40px;
  
    button {
        background-color: #001B7A;
        color: #FFE24F ;
        border-color: yellow;
        font-weight: bold;
        padding: 10px;
        border-radius: 15px;
    }
`