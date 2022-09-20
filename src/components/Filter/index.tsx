import React, { Dispatch, SetStateAction, ChangeEvent } from "react";
import ReactSwitch from "react-switch";
import { Container, TextInput } from "./style";

type FilterProps = {
   statusValue: string,
   onStatusChange: Dispatch<SetStateAction<string>>,
   textValue: string,
   onTextChange: Dispatch<SetStateAction<string>>
   genderValue: string,
   onGenderChange: Dispatch<SetStateAction<string>>
}

const Filter: React.FC<FilterProps> = ({
   onTextChange, textValue,
   onStatusChange, statusValue,
   onGenderChange, genderValue,

}) => {
   const onTextChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onTextChange(e.target.value)
   }
   const onStatusChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
      onStatusChange(e.target.value)
   }
   const onGenderChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
      onGenderChange(e.target.value)
   }
   return (
      <Container>
         <h1>Filtro</h1>
         <TextInput type="text" onChange={onTextChangeHandler} />
         <ReactSwitch
            checked={false}
            onChange={() => { }}
         /> Name
         <ReactSwitch
            checked={false}
            onChange={() => { }}
         /> Type
         <ReactSwitch
            checked={false}
            onChange={() => { }}
         /> Specie
         <label htmlFor="genderSearch">Gender:</label>
         <select id="genderSearch" onChange={onGenderChangeHandler}>
            <option value="">Select a gender...</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
         </select>
         <label htmlFor="statusSearch">Status:</label>
         <select id="statusSearch" onChange={onStatusChangeHandler}>
            <option value="">Select a status...</option>
            <option value="Dead">Dead</option>
            <option value="Alive">Alive</option>
            <option value="unknown">unknown</option>
         </select>
      </Container>
   )
}

export default Filter;