import styled from 'styled-components'


export const Container = styled.div`
    width: 100%; 
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`

export const Box = styled.div`
    flex-grow: 1;
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    padding-top: 100px;
    padding-bottom: 100px;
    padding-left: 50px;
    padding-right: 50px;
`

export const Section = styled.div`
    justify-content: center;
    align-items: center;
    text-align: center;
`

export const Title = styled.h1`
    size: 36;
    color: #FFF;
`

export const Text = styled.p`
    margin-right: 50px;
    margin-left: 50px;
    font-size: 20px;
    color: #FFF;
`
export const Logo = styled.img`
    max-width: 500px;
    width: 40vw;
`