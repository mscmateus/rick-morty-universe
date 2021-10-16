import styled from "styled-components"

export const Container = styled.div`
    min-height: 100vh;
    text-align: center;
    display: flex;
    flex-direction: column;
`
export const Logo = styled.img`
    max-width: 250px;
    width: 200px;
    min-width: 200px;
    `
export const Head = styled.div`
    background-color: rgb(0,0,0,0.5);
    justify-content: center;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
`
export const HeadBox = styled.div`
    text-align: center;
`
export const LogoColumn = styled.div`
    height: 100%;
    text-align: center;
    width: 20%;
    padding: 10px;
    min-width: 210px;
    display: inline-block;
`
export const Column = styled.div`
    display: inline-block;
`
//lista

export const ListContainer = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
export const ListSection = styled.div`
    max-width: 1500px;
    padding: 10px;
    margin-top: 50px;
    margin-bottom: 50px;
`