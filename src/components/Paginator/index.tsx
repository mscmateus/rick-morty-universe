import React, { Dispatch, SetStateAction, useEffect } from 'react'
import { ContainerPaginator, ContainerLeft, ContainerNumbers, ContainerRight, PageButton, Container } from './style';

type PaginatorProps = {
   atualPage: number,
   lastPage: number | undefined,
   count: number | undefined,
   pages: number | undefined,
   pageOnChange: Dispatch<SetStateAction<number>>
}
const Paginator: React.FC<PaginatorProps> = ({ ...PaginatorProps }) => {
   const firstPageOnClickHandle = () => {
      PaginatorProps.pageOnChange(1);
   }
   const prevPageOnClickHandle = () => {
      if ((PaginatorProps.atualPage - 1) > 0)
         PaginatorProps.pageOnChange(PaginatorProps.atualPage - 1);
   }
   const nextPageOnClickHandle = () => {
      if ((PaginatorProps.atualPage + 1) !== PaginatorProps.lastPage)
         PaginatorProps.pageOnChange(PaginatorProps.atualPage + 1);
   }
   const lastPageOnClickHandle = () => {
      if (PaginatorProps.lastPage)
         PaginatorProps.pageOnChange(PaginatorProps.lastPage)
   }
   let render = (
      <Container>
         <ContainerPaginator>
            <ContainerLeft>
               <li><PageButton onClick={firstPageOnClickHandle}>First</PageButton></li>
               {PaginatorProps.atualPage !== undefined ? <li><PageButton onClick={prevPageOnClickHandle}>Prev</PageButton></li> : null}
            </ContainerLeft>
            <ContainerNumbers>
               <li><PageButton active={true}>{PaginatorProps.atualPage}</PageButton></li>
            </ContainerNumbers>
            <ContainerRight>
               {PaginatorProps.lastPage !== undefined ? <li><PageButton onClick={nextPageOnClickHandle}>Next</PageButton></li> : null}
               {PaginatorProps.lastPage !== undefined ? <li><PageButton onClick={lastPageOnClickHandle}>Last</PageButton></li> : null}
            </ContainerRight>
         </ContainerPaginator>
         <small>Total: {PaginatorProps.count} characters in {PaginatorProps.pages} pages</small>
      </Container>
   )
   return render
}

export default Paginator;