import { React, useState } from "react";
import styled from '@emotion/styled'
import * as Const from "./const.js"
import PrimaryButton from "./button.js";

const TextBox = styled.div`
    width: 84%;
    border-radius: 5px;
    background-color: #101010;
    border: 2px solid #333;
    height: 60px;
    overflow: hidden;

    ${Const.mq[0]} {

        width: 100%;
     
    }
`

const TextField = styled.input`
    width: 100%;
    height: 60px;
    position: relative;
    padding: 12px 0 0 16px;
    border: none;
    line-height: normal;
    background-color: transparent;
    font-family: monospace, 'Courier New';
    color: #ccc;
    outline: none;
    font-size: 1.2em;
    box-shadow: 0px 4px 20px 0px transparent;
    &:hover {
        background-color: #111;
        
    }
    &:focus {
        background-color: #111;
        
    }

`

const InputArea = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;    
    margin: 10px 0;
    align-items: center;
    justify-content: space-between;
    
    ${Const.mq[0]} {

        justify-content: center ;
    }


`

const Label = styled.label`
    font-size: 10px;
    margin: 10px 16px;
    position: absolute;
    z-index: 10;
`



const Input = ({inputValue, setInputValue}) => {

    const [val, setVal] = useState(inputValue);


    function handleChange(e) {
        setVal(e.target.value);
    }

    function submit() {
        setInputValue(val);
    }

    return (
        <InputArea>
            
                
                <TextBox>
                    <Label>Attendees</Label>
                    <TextField type="text" value={val} onChange={handleChange}  />
                </TextBox>
            
            <PrimaryButton onClick={submit}>
                Shuffle
            </PrimaryButton>
            
            
        </InputArea>
    );
}

export default Input;