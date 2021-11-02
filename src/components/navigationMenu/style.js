import styled from 'styled-components'
import { Link } from "react-router-dom";

export const Container = styled.nav`
    margin: 0;
    `

export const Menu = styled.ul`
    list-style: none;
    padding: 0;
    border: 0;
    background-color: #C4C4C4;
    display: inline-table;
    border-radius: 5px;
    `

export const ItemLink = styled(Link)`
    color: #393939;
    font-weight: bold;
    font-size: 16px;
    text-decoration: none;
    `
export const MenuItem = styled.li`
    display: table-cell;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 20px;
    padding-right: 20px;
    &:hover{
        background-color: #208e45ff;
        color: #FFF;
        transition: 0.5s;
        ${ItemLink}{
            color: #FFF;
        }
    }
`

