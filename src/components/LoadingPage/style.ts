import styled from "styled-components";
import { BounceLoader } from 'react-spinners';

export const Container = styled.body`
   background-color: ${props => props.theme.colors.background};
`

export const Spinner = styled(BounceLoader)`
   color: ${props => props.theme.colors.green};
`