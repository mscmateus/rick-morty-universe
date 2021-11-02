import styled from "styled-components"

export const Container = styled.div`
    min-height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    flex-grow: 1;
    `
//lista
export const ListContainer = styled.div`
    margin-top: 50px;
    margin-bottom: 50px;
    display: grid;
    flex-grow: 1;
    width: 100%;
    max-width: 1500px;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, minmax(360px, 360px));
    align-self: center;
`