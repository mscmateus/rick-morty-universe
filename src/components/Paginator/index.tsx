import React from 'react'
import { ContainerPaginator, ContainerLeft, ContainerNumbers, ContainerRight, PageButton, Container } from './style';

type PaginatorProps = {
   atualPage: number,
   lastPage: number,
   pageOnChange(page: number): number
}
const Paginator: React.FC<PaginatorProps> = ({ ...PaginatorProps }) => {

   const firstPageOnClickHandle = () => {
      PaginatorProps.pageOnChange(1);
   }
   const prevPageOnClickHandle = () => {
      PaginatorProps.pageOnChange(PaginatorProps.atualPage - 1);
   }
   const nextPageOnClickHandle = () => {
      PaginatorProps.pageOnChange(PaginatorProps.atualPage + 1);
   }
   const lastPageOnClickHandle = () => {
      PaginatorProps.pageOnChange(PaginatorProps.lastPage);
   }
   return (
      <Container>
         <ContainerPaginator>
            <ContainerLeft>
               <li><PageButton onClick={firstPageOnClickHandle}>First</PageButton></li>
               {PaginatorProps.atualPage + 1 !== PaginatorProps.lastPage ? <li><PageButton onClick={prevPageOnClickHandle} >Prev</PageButton></li> : null}
            </ContainerLeft>
            <ContainerNumbers>
               <li><PageButton active={true}>{PaginatorProps.atualPage}</PageButton></li>
            </ContainerNumbers>
            <ContainerRight>
               {PaginatorProps.atualPage + 1 !== PaginatorProps.lastPage ? <li><PageButton onClick={nextPageOnClickHandle}>Next</PageButton></li> : null}
               <li><PageButton onClick={lastPageOnClickHandle}>Last</PageButton></li>
            </ContainerRight>
         </ContainerPaginator>
         <small>Total: 1234 characters in 123 pages</small>
      </Container>
   )
}

export default Paginator;