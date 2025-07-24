import React, { useState } from 'react'
import styled from 'styled-components';

const NumberSelector = ({selectedNumber, setSelectedNumber}) => {

    const arrNumber = [1,2,3,4,5,6];
    

  return (
    <NumberSelectorContainer>
    <div className='flex'>
        {arrNumber.map((value,i)=>(<Box 
        key={i} 
        isSelected={value === selectedNumber}
        onClick={()=>setSelectedNumber(value)}>
        {value}</Box>))}
    </div>
    <p>Select Number</p>
    </NumberSelectorContainer>
  )
}

export default NumberSelector;


const NumberSelectorContainer = styled.div`
display: flex;
flex-direction: column;
align-items: end;

.flex{
display:flex;
gap: 24px;
}

p{
font-size; 24px;
font-weight:700;
}
`;



const Box = styled.div`
height: 72px;
width: 72px;
font-size: 24px;
font-weight: 700;
border: 2px solid black;
display: grid;
place-items: center;

//Passing props in styled components without destructuring it
// background-color: ${(props) => (props.isSelected ? "black" : "white")};
//   color: ${(props) => (!props.isSelected ? "black" : "white")};

//writing same by destructuring the props 
background-color: ${({isSelected}) => (isSelected ? "black" : "white")};
  color: ${({isSelected}) => (!isSelected ? "black" : "white")};

`