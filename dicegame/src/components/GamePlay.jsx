import React, { useState } from 'react'
import styled from 'styled-components'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import RoleDice from './RoleDice'

const GamePlay = () => {

    const [score, setScore] = useState(0);
    const [currentDice, setCurrentDice] = useState(1);
    const [selectedNumber, setSelectedNumber]=useState();

    const generateRandomNumber = (min, max)=>{
        return Math.floor(Math.random() * (max-min)+min);
    }

    const roleDice = ()=>{
        const randomNumber = generateRandomNumber(1,7);
        setCurrentDice((prev)=>randomNumber);

        if(selectedNumber===randomNumber){
            setScore((prev)=>prev + randomNumber)
        }
        else{
            setScore((prev)=>prev -2);
        }

        setSelectedNumber(undefined);
    }

  return (
    <MainContainer>
        <div className="top_section">
            <TotalScore score={score}/>
            <NumberSelector 
            selectedNumber={selectedNumber}
            setSelectedNumber={setSelectedNumber}
            />
        </div>
        <div className="btns">
            <RoleDice 
            currentDice={currentDice}
            roleDice={roleDice}
            />
        </div>
    </MainContainer>
  )
}

export default GamePlay;

const MainContainer = styled.div`

padding-top: 70px;

.top_section{
display: flex;
justify-content: space-around;
align-items: end;
}
`;
