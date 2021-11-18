import { useState, useEffect } from "react";
import styled from '@emotion/styled'
import Carlton from "../img/the-carlton.gif"

function Header() {

    const Nav = styled.div`
        color: #fff;
        width: 98%;
        height: 40px;
        display: flex;
        flex-direction: row;
        align-content: flex-start;
        padding: 15px 0;
        border-radius: 10px;
    `

    const HeaderText = styled.div`
        margin: 0 10px;
        font-size: 1.2em;
        font-weight: 00;
        color: #ccc;
    `
    


    return (
      <Nav>
       <img src={Carlton} alt="logo" />
       <HeaderText><strong>Standup<br /> Shuffle</strong></HeaderText>
      </Nav>
    );
  }
  
  export default Header;