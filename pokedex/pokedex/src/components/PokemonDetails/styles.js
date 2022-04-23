import styled from 'styled-components'
import react from 'react'

export const Page = styled.body`
background-color: black;
height: 100vh;
width: 100vw;
margin: 0;
`


export const HeaderDetails = styled.div`
 display: flex;
 background-color:pink;
`
export const ButtonDetails = styled.div `
 `

export const PokemonPics = styled.div`
display: flex;
flex-direction: column;

img {
    width:200px;
    background-color: #D10101;
    margin:10px;
}
`

export const ContainerDetails = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
`

export const Stats = styled.div`
display: flex;
flex-direction: column;
background-color: #D10101;
width: 200px;
`

export const TypesAndAttacks = styled.div`
display: flex;
flex-direction: column;
`

export const Types = styled.div`
display: flex;
background-color: #D10101;
justify-content: space-around;
margin-bottom: 20px;
`

export const Attacks = styled.div`
display: flex;
flex-direction: column;
background-color: #D10101;
width: 200px;
`
