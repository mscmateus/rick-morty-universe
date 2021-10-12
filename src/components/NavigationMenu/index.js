import React from 'react'

import { Container, Menu, MenuItem, ItemLink } from './style';

export default function NavigationMenu() {
    return (
        <Container>
            <Menu>
                <MenuItem>
                    <ItemLink to="/characters">
                        Characters
                    </ItemLink>
                </MenuItem>
                <MenuItem>
                    <ItemLink to="/lacations">
                        Lacations
                    </ItemLink>
                </MenuItem>
                <MenuItem>
                    <ItemLink to="/episodes">
                        Episodes
                    </ItemLink>
                </MenuItem>
            </Menu>
        </Container>
    )
}
