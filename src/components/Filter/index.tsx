import React, { Dispatch, SetStateAction, ChangeEvent, useState } from "react";
import ReactSwitch from "react-switch";
import { Container, TextInput } from "./style";

type FilterProps = {
   statusValue: string,
   onStatusChange: Dispatch<SetStateAction<string>>,
   textValue: string,
   onTextChange: Dispatch<SetStateAction<string>>
   genderValue: string,
   onGenderChange: Dispatch<SetStateAction<string>>,
   byName: boolean,
   onByNameChange: Dispatch<SetStateAction<boolean>>,
   byType: boolean,
   onByTypeChange: Dispatch<SetStateAction<boolean>>,
   bySpecie: boolean
   onBySpecieChange: Dispatch<SetStateAction<boolean>>,

}

const Filter: React.FC<FilterProps> = ({
   onTextChange, textValue,
   onStatusChange,
   onGenderChange,
   byName, onByNameChange,
   byType, onByTypeChange,
   bySpecie, onBySpecieChange
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
   const onByNameChangeHandler = (checked: boolean) => {
      onByNameChange(checked)
   }
   const onByTypeChangeHandler = (checked: boolean) => {
      onByTypeChange(checked)
   }
   const onBySpecieChangeHandler = (checked: boolean) => {
      onBySpecieChange(checked)
   }
   return (
      <Container>
         <h1>Filtro</h1>
         <TextInput type="text" value={textValue} onChange={onTextChangeHandler} />
         <ReactSwitch
            checked={byName}
            onChange={onByNameChangeHandler}
         /> Name
         <ReactSwitch
            checked={byType}
            onChange={onByTypeChangeHandler}
         /> Type
         <ReactSwitch
            checked={bySpecie}
            onChange={onBySpecieChangeHandler}
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