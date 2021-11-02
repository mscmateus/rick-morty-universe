import styled from "styled-components"

export const Container = styled.div`
    border-radius: 5px;
    background-color: #A4A4A4;
    padding: 20px;
    margin: 10px;
    display: flex;
    flex-direction: column;
`
export const CharacterImg = styled.img`
    width: 300px;
    height: 300px;
    align-self: center;
    border-radius: 5px;
`
export const CharacterSection = styled.div`
    display: inline-block;
    width: 90%;
    h1{
        margin: 0;
        color: #FFF;
    }
    h2{
        font-size: 16px;
        margin: 0;
        color: #393939;
    }
    p{
        font-size: 15px;
        margin: 0;
        color: #000;
    }
`
export const SectionRow = styled.div`
    text-align: left;
    margin-top: 15px;
`