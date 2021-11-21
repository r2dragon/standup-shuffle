import React, { useEffect, useState } from "react";
import Header from "./header.js"
import Rando from "./rando.js"
import Input from "./input.js";
import Url from "./url.js";
import styled from '@emotion/styled'
import * as Const from "./const.js"
import { useLocation } from "react-router-dom";

function Home() {
  const Page = styled.div`
    width: 90%;
    background-color: #101010;
    color: #fff;
    padding: 50px 5%;
    display: block;
    
    ${Const.mq[0]} {
      padding-top: 20px;
    }
    
  `
  
  const Meta = styled.div`
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 20px;

        a {
          color: ${Const.linkColor};
          text-decoration: none;
        }

        ${Const.mq[0]} {

            flex-direction: column;
            justify-content: center;
            align-items: center;
         
        }
    `
  

  const { search } = useLocation();
  const [params, setParams] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const date = new Date().toLocaleString()
  const url = "https://r2dragon.github.io/standup-shuffle/#/?list=" + inputVal;
  // const list = useMemo(() => {
  //   return getList(search)
  // },[search])

  useEffect(() => {
    getList(search);
  },[search])

  function getList(x) {
    const list = new URLSearchParams(x);
    const Y = list.get("list")
    if (Y !== null) {
      setInputVal(Y);  
      strToArray(Y)
    }  
    else {
      setParams(["Ant-Man", "Rogue", "Black Panther", "Elektra", "Iron Man", "Black Widow", "Spider-Man"])
      setInputVal("Ant-Man,Rogue,Black Panther,Elektra,Iron Man,Black Widow,Spider-Man")
    }
    
  }

  function strToArray(str) {
    const Array = str.split(",");
    setParams(Array);
  }

  useEffect(() => {

  },[inputVal])


  const setIt = (val) => {
    strToArray(val);
    setInputVal(val);
  }
  
  return (
    <Page>
      <Header />
      {params &&
        <>
          <Input inputValue={inputVal} setInputValue={setIt} />
          <Rando data={params} />

          <Url href={url}>{url}</Url>

          <Meta>
            <small>Last Shuffle: {date}</small>
            <small>Built with ❤️ by <a href="https://github.com/r2dragon" target="_blank">r2</a></small>
          </Meta>
        </>
      }
    </Page>
  );
}

export default Home;
