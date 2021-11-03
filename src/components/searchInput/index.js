import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Container, Icon, Input, FormItem } from './style'

export default function SearchInput({
    search="",
    onSubmit = ()=>{},
    placeholder=""
}) {
    const [value,setValue] = React.useState("")
    React.useEffect(()=>{
        setValue(search)
    },[])
    function handleSubmit(event){
        onSubmit(value)
        event.preventDefault();
    }
    function handleChange(event){
        setValue(event.target.value)
    }
    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <FormItem>
                    <Input
                        type="search"
                        id="search"
                        name="search"
                        placeholder={placeholder}
                        value={value}
                        onChange={handleChange}
                    />
                </FormItem>
                <FormItem>
                    <Icon type="submit">
                        <FaSearch size={18} color={"#393939"} />
                    </Icon>
                </FormItem>
            </form>
        </Container>
    )
}