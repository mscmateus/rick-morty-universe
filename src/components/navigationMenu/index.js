import React from 'react'

import { Container, Menu, MenuItem, ItemLink } from './style';

export default function NavigationMenu() {
    return (
        <Container>
            <Menu>
                <ItemLink to="/home">
                    <MenuItem style={{borderTopLeftRadius: 5, borderBottomLeftRadius: 5}}>
                        Home
                    </MenuItem>
                </ItemLink>
                <ItemLink to="/characters" >
                    <MenuItem style={{borderTopRightRadius: 5, borderBottomRightRadius: 5}}>
                        Characters
                    </MenuItem>
                </ItemLink>
                <ItemLink to="/locations">
                    <MenuItem>
                        Lacations
                    </MenuItem>
                </ItemLink>
                {/* <ItemLink to="/episodes">
                    <MenuItem style={{borderTopRightRadius: 5, borderBottomRightRadius: 5}}>
                        Episodes
                    </MenuItem>
                </ItemLink> */}
            </Menu>
        </Container>
    )
}
