import styled from 'styled-components'

export const Page = styled.div`
    background-color: #000000;
    height: 100%;
    width: 100%;
`

export const Header = styled.header `
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #ffffff ;
    height: 10vw;
    margin-bottom: 3vw;

    img {
        height: 8vw;
        margin-right: 25vw;
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

export const PokemonPics = styled.div`
    display: flex;
    flex-direction: column;

    img {
        width: 15vw;
        background-color: #D10101;
        margin: 1vw;
        border: #fefefe 2px solid; 
        border-radius: 1vw;
    }
`

export const ContainerDetails = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
`

export const NameAndStats = styled.div`
    display: flex;
    flex-direction: column;
    height: 30vw;
    justify-content: center;
`

export const Names = styled.div`
    color: #ffffff;
    justify-content: center;
    background-color: #D10101;
    border: #fefefe 2px solid; 
    border-radius: 1vw;
    margin-bottom: 2vw;
    text-align: center;
    font-size: 2.5vw;
    font-family: fantasy;
    height: 6vw;
    display: flex;
    align-items: center;
`

export const Stats = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #D10101;
    width: 15vw;
    border: #fefefe 2px solid; 
    border-radius: 1vw;
    padding-left: 1vw;
    height: 30vw;
    justify-content: center;
    color:#ffffff;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.2vw;


    p {
        margin: .8vw 0;
    }

`

export const TypesAndAttacks = styled.div`
    display: flex;
    flex-direction: column;
    height: 30vw;
    justify-content: center;
    font-size: 1.2vw;
`

export const ContainerType = styled.div `
    display: flex;
    flex-direction: column;
    color: #ffffff;
    background-color: #D10101;
    justify-content: space-around;
    margin-bottom: 2vw;
    border: #fefefe 2px solid; 
    border-radius: 1vw;
    height: 5vw;
    align-items: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
`


export const Types = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;
`

export const Attacks = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #D10101;
    width: 15vw;
    border: #fefefe 2px solid; 
    border-radius: 1vw;
    padding-left: 1vw;
    height: 25vw;
    justify-content: center;
    color:#ffffff;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    gap: 2vw;
`

