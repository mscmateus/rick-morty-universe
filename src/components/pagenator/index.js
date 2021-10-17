import React from 'react'

import { Container, Menu, MenuItem, MenuItemCorrent } from './style';

export default function Pagenator({
    corrent = 0,
    pages = 0,
    nextOnClick = () => { },
    pageOnClick = () => { },
    previousOnClick = () => { },
}) {
    function renderPrevious() {
        var result = [], aux = 0
        for (var i = corrent - 1; i > 0; i--) {
            if (aux < 3) {
                aux++
                result.push(i)
            } else {
                break
            }
        }
        return result.reverse()
    }
    function renderNexts() {
        var result = [], aux = 0
        for (var i = corrent + 1; i <= pages; i++) {
            if (aux < 2) {
                aux++
                result.push(i)
            } else {
                break
            }

        }
        return result
    }
    return (
        <Container>
            <Menu>
                <MenuItem onClick={previousOnClick} style={{ borderTopLeftRadius: 5, borderBottomLeftRadius: 5 }}>
                    {'Prev'}
                </MenuItem>
                {renderPrevious().map((pageNumber, index) =>
                    <MenuItem onClick={() => pageOnClick(pageNumber)}>
                        {pageNumber}
                    </MenuItem>)
                }
                <MenuItemCorrent>
                    {corrent}
                </MenuItemCorrent>
                {renderNexts().map((pageNumber, index) =>
                    <MenuItem onClick={() => pageOnClick(pageNumber)}>
                        {pageNumber}
                    </MenuItem>)
                }
                {(corrent + 2 < pages) ?
                    (<><MenuItemCorrent>
                        ...
                    </MenuItemCorrent>
                        <MenuItem onClick={() => pageOnClick(pages)}>
                            {pages}
                        </MenuItem>
                    </>)
                    :
                    null
                }
                <MenuItem onClick={nextOnClick} style={{ borderTopRightRadius: 5, borderBottomRightRadius: 5 }}>
                    {'Next'}
                </MenuItem>
            </Menu>
        </Container>
    )
}