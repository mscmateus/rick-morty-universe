import React from 'react'
import { ContainerPaginator, ContainerLeft, ContainerNumbers, ContainerRight, PageLink, Container } from './style';

const Paginator = () => {
   return (
      <Container>
         <ContainerPaginator>
            <ContainerLeft>
               <li><PageLink to="#">First</PageLink></li>
               <li><PageLink to="#">Prev</PageLink></li>
            </ContainerLeft>
            <ContainerNumbers>
               <li><PageLink to="#">4</PageLink></li>
               <li><PageLink active={true} to="#">5</PageLink></li>
               <li><PageLink to="#">6</PageLink></li>
            </ContainerNumbers>
            <ContainerRight>
               <li><PageLink to="#">Next</PageLink></li>
               <li><PageLink to="#">Last</PageLink></li>
            </ContainerRight>
         </ContainerPaginator>
         <small>Total: 123 pages</small>
      </Container>
   )
}

export default Paginator;