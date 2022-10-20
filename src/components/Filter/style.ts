import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
`

export const TextInput = styled.input`
   width: 100%;
   font-size: 16px;
   padding: 0.25em;
   margin-bottom: 0.5em;
`

export const OptionsContainer = styled.div`
   padding: 0.5em;
   ul{
      list-style: none;
      display: flex;
      flex-direction: row;
   }
   li{
      margin: 0.25em;
   }
`

export const SelectsContainer = styled.div`
   select {
      width: 100%;
      font-size: 16px;
      padding: 0.25em;
      margin-bottom: 0.5em;
   }
`

export const FormItem = styled.div`
   display: flex;
   flex-direction: column;
   select {
      min-width: 150px;
   }
`

export const FilterContainer = styled.div`
   padding: 1em 3em;
   display: flex;
   flex-direction: row;
   border-radius: 0in;
   background-color: ${Props => Props.theme.colors.primary};
   @media only screen and (max-width: 768px) {
      padding: 1em;
      flex-direction: column;
  }
`