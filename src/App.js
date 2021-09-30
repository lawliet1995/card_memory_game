import React, {useState, useRef} from 'react';
import styled from 'styled-components';
import GameBoard from './components/GameBoard/GameBoard';

const Button = styled.button`
  display: block;
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  margin: auto;
`;

const RadioField = styled.div`
  margin: auto;
  text-align: center;
  padding: 20px;
`;

const Container = styled.div`
  width: 100%;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

function App() {
  const [turn, setTurn] = useState(0);
  const [level, setLevel] = useState('easy');
  const selectedLevel = useRef('easy');

  return (
    <Container>
      <GameBoard turn = {turn} level = {level}></GameBoard>
      <RadioField>
        <input type="radio" name="level" value="easy" 
          onClick={() => {selectedLevel.current = 'easy'}} defaultChecked />
        <label htmlFor="huey">Easy</label>

        <input type="radio" name="level" value="medium" 
          onClick={() => {selectedLevel.current = 'medium'}} />
        <label htmlFor="huey">Medium</label>

        <input type="radio" name="level" value="hard" 
          onClick={() => {selectedLevel.current = 'hard'}} />
        <label htmlFor="huey">Hard</label>
      </RadioField>      
      <Button onClick={() => {
        setTurn(prev => prev + 1);
        setLevel(selectedLevel.current);
      }}> Reset </Button>
    </Container>
  );
}

export default App;
