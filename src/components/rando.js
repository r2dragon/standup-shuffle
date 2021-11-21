import React, {useMemo,  useState } from "react";
import styled from '@emotion/styled'
import * as Const from "./const.js"


const Rando = (props) => {

    const[inputArray, setInputArray] = useState(props.data);
    const[returnArray, setReturnArray] = useState();
    

    
    const RondoContainer = styled.div`
        background-color: #333;
        border-radius:5px;
        width: 92%;
        padding: 16px 4%;
        margin: 20px 0;
        overflow: hidden;
        font-size: 1.2em;
        
    `

    useMemo(()=> {

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
    
    return (
        <>
        <RondoContainer>
            <ol>
                {returnArray &&
                    returnArray.map(item =>
                        <li key={item}>{item}</li>
                    )   
                }
            </ol>
            
        </RondoContainer>
        </>

    );


    
}

export default Rando;
