import React from 'react';

import { Container } from './style'

export default function Copyright() {
    return (
        <Container>
            <h3>
                {'Powered by '}
                <a color="inherit" href="https://rickandmortyapi.com/">
                The Rick and Morty API
                </a>
                {'.'}
            </h3>
            <h3>
                {'Copyright © '}
                <a href="https://github.com/mscmateus">
                    Mateus Costa
                </a>{' '+new Date().getFullYear()+'.'}
            </h3>
        </Container>
    );
}