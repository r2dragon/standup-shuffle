import { React, useMemo, useEffect, useState } from "react";
import Header from "./header.js"
import Rando from "./rando.js"
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

  const { search } = useLocation();
  const [params, setParams] = useState([]);
  const list = useMemo(() => {
    return getList(search)
  },[search])

  function getList(x) {
    const list = new URLSearchParams(x);
    const Y = list.get("list")
    if (Y !== null) {
      const Array = Y.split(",");
      setParams(Array);
      return list  
    }  
    else {
      setParams(["ironman", "razor", "spiderman"])
    }
    
  }

  useEffect(()=> {
    console.log(params)
  },[params])
  
  return (
    <Page>
      <Header />
      {params &&
        <>
        <br />
          <label for="attendees" >Add Attendees</label>
          <TextBox type="text" id="attendees" value={params} />
          <Rando data={params} />
        </>
      }
    </Page>
  );
}

export default Home;
