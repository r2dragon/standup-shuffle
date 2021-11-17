import { useState, useEffect } from "react";
import styled from '@emotion/styled'
import Carlton from "../img/the-carlton.gif"

function Header() {

    const Nav = styled.div`
        background-color: #333;
        color: #fff;
        width: 98%;
        height: 40px;
        display: flex;
        flex-direction: row;
        align-content: flex-start;
        padding: 15px 1%;
        border-radius: 10px;
    `

    const HeaderText = styled.div`
        margin: 0 10px;
        font-size: 1.2em;
        font-weight: 600;
        color: #ccc;
        font-family:'VT323' !important;
    `
    


    return (
      <Nav>
       <img src={Carlton} alt="logo" />
       <HeaderText>Standup<br /> Shuffle</HeaderText>
      </Nav>
    );
  }
  
  export default Header;