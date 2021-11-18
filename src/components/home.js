import { React, useMemo, useEffect, useState } from "react";
import Header from "./header.js"
import Rando from "./rando.js"
import Input from "./input.js";
import styled from '@emotion/styled'
import { useLocation } from "react-router-dom";

function Home() {
  const Page = styled.div`
    width: 90%;
    background-color: #101010;
    color: #fff;
    padding: 50px 5%;
    display: block;
  `

  

  const { search } = useLocation();
  const [params, setParams] = useState([]);
  const [inputVal, setInputVal] = useState("");
  
  const list = useMemo(() => {
    return getList(search)
  },[search])

  function getList(x) {
    const list = new URLSearchParams(x);
    const Y = list.get("list")
    if (Y !== null) {
      setInputVal(Y);  
    }  
    else {
      setParams(["ironman", "razor", "spiderman"])
      setInputVal("ironman,razor,spiderman")
    }
    
  }

  function strToArray(str) {
    const Array = str.split(",");
    setParams(Array);
  }

  useEffect(() => {
    console.log(inputVal);
    strToArray(inputVal)
  },[inputVal])


  
  return (
    <Page>
      <Header />
      {params &&
        <>
          <Input inputValue={inputVal} setInputValue={setInputVal} />
          <Rando data={params} />
        </>
      }
    </Page>
  );
}

export default Home;
