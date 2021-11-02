import styled from 'styled-components'
import { Link } from "react-router-dom";

export const Menu = styled.ul`
    list-style: none;
    padding: 0;
    border: 0;
    background-color: #C4C4C4;
    border-radius: 5px;
    display: flex;
    align-content: center;
    justify-content: center;
    align-self: center;
`
export const MenuItem = styled.a`
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 10px;
    padding-right: 10px;
    border: unset;
    cursor: pointer;
    &:hover{
        background-color: #208e45ff;
        color: #FFF;
    }
`

export const MenuItemCorrent = styled.a`
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 10px;
    padding-right: 10px;
    background-color: #393939;
    color: #FFF;
    border: unset;
`
