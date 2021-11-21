
import styled from '@emotion/styled'
import Carlton from "../img/the-carlton.gif"
import * as Const from "./const"

function Header() {


    const Nav = styled.div`
        color: #fff;
        width: 100%;
        height: 60px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        margin-bottom: 20px;
        
        img {
          height: 50px;
        }

        ${Const.mq[0]} {
          justify-content: center;
        }
    `

    const HeaderText = styled.div`
        margin: 0 10px;
        font-size: 1.4em;
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