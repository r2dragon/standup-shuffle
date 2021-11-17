import { React, useState, useEffect } from "react";
import styled from '@emotion/styled'


function Rando(props) {

    const[inputArray, setInputArray] = useState(props.data);
    const[returnArray, setReturnArray] = useState();
    const[editing, setEditing] = useState(false);

    const RondoContainer = styled.div`
        background-color: #222;
        border-radius: 10px;
        width: ${editing ? '96%' : '92%'}; 
        padding: ${editing ? '15px 2%' : '15px 4%'}; 
        margin: 20px 0;
        overflow: hidden;
        font-size: 2em;
    `

    const Textarea = styled.textarea`
        background-color: #eee;
        border-radius: 5px 5px 0 5px;
        width: 95%;
        height: 150px;
        padding: 10px;
    `

    

    useEffect(()=> {

        if(inputArray !== undefined) {
            shuffleArray(inputArray)
        }

    },[inputArray]);

    function shuffleArray(array) {
        for(let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }

        setReturnArray(array)
    }

    if(!editing){

        return (
            <RondoContainer>
                <ol>
                    {returnArray &&
                        returnArray.map(item =>
                            <li key={item}>{item}</li>
                        )   
                    }
                </ol>
                
            </RondoContainer>
    
        );

    } 

    else if(editing) {
        return (
            <RondoContainer>
                
                <Textarea value={inputArray} />

            </RondoContainer>
    
        );
    }
    
}

export default Rando;
