import styled from "styled-components"

export const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    align-content: center;
`
export const CharacterImg = styled.img`
    width: 400px;
    height: 400px;
    align-self: center;
    border-radius: 5px;
`
export const Section = styled.div`
    flex-grow: 1;
    display: grid;
    height: 100%;
    margin: 20px;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, minmax(400px, 500px));
`

export const EpisodesSection = styled.div`
    height: 300px;
    background-color: honeydew;
`

export const BasicData = styled.div`
    background-color: blue;
    margin: 5px;
`

export const CharacterImage = styled.div`
    background-color: gray;
    margin: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    padding: 10px;
`
export const BasicInfo = styled.div`
    background-color: green;
    margin: 5px;
`

export const CharacterData = styled.div`
    background-color: red;
    width: 100%;
    margin: 5px;
`
