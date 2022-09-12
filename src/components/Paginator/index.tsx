import React, { Dispatch, SetStateAction, useEffect } from 'react'
import { ContainerPaginator, ContainerLeft, ContainerNumbers, ContainerRight, PageButton, Container } from './style';

type PaginatorProps = {
   atualPage: number,
   lastPage?: number,
   pageOnChange: Dispatch<SetStateAction<number>>
}
const Paginator: React.FC<PaginatorProps> = ({ ...PaginatorProps }) => {

   useEffect(() => {
      console.log(PaginatorProps.atualPage);
      console.log(PaginatorProps.lastPage);
   })
   const firstPageOnClickHandle = () => {
      PaginatorProps.pageOnChange(1);
   }
   const prevPageOnClickHandle = () => {
      if (PaginatorProps.atualPage > 1)
         PaginatorProps.pageOnChange(PaginatorProps.atualPage - 1);
   }
   const nextPageOnClickHandle = () => {
      if (PaginatorProps.lastPage !== null)
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
               {PaginatorProps.atualPage + 1 !== PaginatorProps.lastPage ? <li><PageButton onClick={prevPageOnClickHandle} >Prev</PageButton></li> : null}
            </ContainerLeft>
            <ContainerNumbers>
               <li><PageButton active={true}>{PaginatorProps.atualPage}</PageButton></li>
            </ContainerNumbers>
            <ContainerRight>
               {PaginatorProps.atualPage + 1 !== PaginatorProps.lastPage ? <li><PageButton onClick={nextPageOnClickHandle}>Next</PageButton></li> : null}
               {PaginatorProps.lastPage !== null ? <li><PageButton onClick={lastPageOnClickHandle}>Last</PageButton></li> : null}
            </ContainerRight>
         </ContainerPaginator>
         <small>Total: 1234 characters in 123 pages</small>
      </Container>
   )
   return render
}

export default Paginator;