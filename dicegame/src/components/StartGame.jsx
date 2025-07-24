import React from 'react';
import styled from 'styled-components';
import Button from '../styled/Button';

const StartGame = ({toggle}) => {
  return (
    <Container>
        <div>
            <img src="./dices.png" alt="" />
        </div>
        <div className='content'>
            <h1>Dice Game</h1>
            <Button onClick={toggle}>Play Now</Button>
        </div>
    </Container>
  )
}

export default StartGame;


const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  padding: 2rem;
  background-color: #f4f4f4;

  .content{
  h1{
  font-size: 96px;
  }
  }
`;

