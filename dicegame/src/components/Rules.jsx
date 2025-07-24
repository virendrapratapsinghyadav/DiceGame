 import React from 'react'
 import styled from 'styled-components';
 
 const Rules = () => {
   return (
     <Rulescontainer>
        <div>
            <h1>How to play dice game</h1>
            <p>Select any number.</p>
            <p>Click on dice image. </p>
            <p>After click on dice if selected number is equal to dice number you will get same point as dice. </p>
            <p>If you get wrong guess then 2 point will be deducted. </p>
        </div>
     </Rulescontainer>
   )
 }
 
 export default Rules;


 const Rulescontainer = styled.div`
 
 `;