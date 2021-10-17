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
export const MenuItem = styled.a`
    display: table-cell;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 20px;
    padding-right: 20px;
    background-color: #C4C4C4;
    border: unset;
    &:hover{
        background-color: #208e45ff;
        color: #FFF;
        transition: 0.5s;
        color: #FFF;
    }
`

export const MenuItemCorrent = styled.a`
    display: table-cell;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 20px;
    padding-right: 20px;
    background-color: #393939;
    color: #FFF;
    border: unset;
`
