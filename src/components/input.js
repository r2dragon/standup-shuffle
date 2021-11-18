import { React, forwardRef, useRef, useEffect, useState } from "react";
import styled from '@emotion/styled'
import CarltonFace from '../img/carlton-face.png'

const TextBox = styled.div`
    width: 85%;
    margin: 4px 0 10px 0;
    border-radius: 5px;
    background-color: #101010;
    border: 2px solid #333;
    height: 50px;
    overflow: hidden;
`

const TextField = styled.input`
    width: 100%;
    height: 50px;
    position: relative;
    padding: 7px 0 0 16px;
    border: none;
    line-height: normal;
    background-color: transparent;
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
    align-items: center;
    justify-content: space-between;
`

const Label = styled.label`
    font-size: 10px;
    margin: 10px 16px;
    position: absolute;
    z-index: 10;
`

const Button = styled.button`
    height: 50px;
    align-items: center;    
    background-color: #eee;
    width: 10%;
    border-radius: 5px;
    border: none;
    font-size: 0.8em;
    display: inline-block;
    cursor: pointer;
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
            
            <Button onClick={submit}>
                {/* <img src={CarltonFace} height="100%"/> */}
                Shuffle
            </Button>
            
            
        </InputArea>
    );
}

export default Input;