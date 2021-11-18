import { React, useMemo, useEffect, useState } from "react";
import styled from '@emotion/styled'

const TextBox = styled.input`
    width: 98.5%;
    margin: 20px 1% 20px 0;
    padding: 20px 0 20px 1%;
    font-size: 2em;
    border-radius: 10px;
    background-color: #101010;
    border: 2px solid #ccc;
    color: #ccc;
  `
function Input ({inputValue, setInputValue}) {

    const [val, setVal] = useState(inputValue);

    function handleChange(e) {
        setVal(e.target.value);
    }

    function submit() {
        setInputValue(val);
    }

    return (
        <div>
            <label>Attendees
                <TextBox type="text" value={val} onChange={handleChange} />
                <button onClick={submit}>Submit</button>
            </label>
            
        </div>
    );
}

export default Input;