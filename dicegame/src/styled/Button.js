 import styled from "styled-components";

 const Button = styled.button`
 display:flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 padding: 10px 18px;
 height: 44px;
 min-width: 220px;
 font-size: 18px;
 background: black;
 border-radius: 5px;
 border: none;
 color: white;
 cursor: pointer;
 transition: 0.4s background  ease-in;

 &:hover{
 background-color: white;
 color: black;
 border: 1px solid black;
 transition: 0.3s background  ease-in;
 }
 `;

 export default Button;