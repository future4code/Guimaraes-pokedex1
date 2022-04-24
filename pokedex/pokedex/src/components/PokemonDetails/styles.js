import styled from 'styled-components'
import react from 'react'

export const Page = styled.body`
background-color: black;
height: 100vh;
width: 100vw;
margin: 0px;
padding: 0%;
`

export const Header = styled.header `
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

export const PokemonPics = styled.div`
display: flex;
flex-direction: column;

img {
    width:200px;
    background-color: #D10101;
    margin:10px;
    border: #fefefe 2px solid; 
    border-radius: 15px;
}
`

export const ContainerDetails = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
`

export const NameAndStats = styled.div`
display: flex;
flex-direction: column;
height: 450px;
justify-content: center;
`

export const Names = styled.div`
color: #ffffff;
justify-content: center;
background-color: #D10101;
border: #fefefe 2px solid; 
border-radius: 15px;
margin-bottom: 20px;
text-align: center;
font-size: 30px;
font-family: fantasy;
height: 70px;
display: flex;
align-items: center;
`

export const Stats = styled.div`
display: flex;
flex-direction: column;
background-color: #D10101;
width: 200px;
border: #fefefe 2px solid; 
border-radius: 15px;
padding-left: 15px;
height: 320px;
justify-content: center;

p {
    margin-bottom: 10px;
    margin-top: 10px;
    font-size: larger;
}
`

export const TypesAndAttacks = styled.div`
display: flex;
flex-direction: column;
height: 450px;
justify-content: center;
`

export const Types = styled.div`
display: flex;
background-color: #D10101;
justify-content: space-around;
margin-bottom: 20px;
border: #fefefe 2px solid; 
border-radius: 15px;
height: 60px;
align-items: center;
font-size: larger;
`

export const Attacks = styled.div`
display: flex;
flex-direction: column;
background-color: #D10101;
width: 200px;
border: #fefefe 2px solid; 
border-radius: 15px;
padding-left: 15px;
height: 320px;
justify-content: center;
font-size: larger;
`
