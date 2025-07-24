 import React, { useState } from 'react';
 import styled from 'styled-components';
 
 const RoleDice = ({roleDice, currentDice}) => {

   return (
     <DiceContainer onClick={roleDice}>
        <div className='dice'>
            <img src={`/images/dice_${currentDice}.png`} alt="DICE 1" />
        </div>
        <p>Click on the Dice to roll</p>
     </DiceContainer>
   )
 }
 
 export default RoleDice;

 const DiceContainer = styled.div`
 display: flex;
 margin_top: 48px;
 flex-direction: column;
 align-items: center;
  p{
  font-size: 24px;
  font-weight:500;
  }
  .dice{
  cursor: pointer;
  }
 `;
 