import styled from 'styled-components'


export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const Box = styled.div`
    background-color: rgb(0,0,0,0.5);
    padding-top: 100px;
    padding-bottom: 100px;
    padding-left: 50px;
    padding-right: 50px;
`

export const Section = styled.div`
    width: "100%";
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