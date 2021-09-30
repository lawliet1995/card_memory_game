import React, {useState, useRef} from 'react';
import styled, {keyframes} from 'styled-components';
import GameBoard from './components/GameBoard/GameBoard';

const changeFontFamily = keyframes`
  0% { font-family: sans-serif; }
  33% { font-family: monospace; }
  66% { font-family: fantasy; }
  100% { font-family: sans-serif; }
`;

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

const LoadingPage = styled.div`
  display: none;

  width: 100%;  
  height: 560px;
  background-color: #ffade2;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 99;
  line-height: 560px;
  font-size: 88px;
  color: whitesmoke;
  text-align: center;

  animation: ${changeFontFamily} 3s linear infinite;
`;


const RadioLabel = styled.label`
  padding: 0px 4px 0 0;
`;

function App() {
  const [turn, setTurn] = useState(0);
  const [level, setLevel] = useState('easy');
  const selectedLevel = useRef('easy');
  const loadingRef = useRef(0);

  return (
    <Container>
      <LoadingPage ref={loadingRef}>&nbsp;&nbsp;Loading...</LoadingPage>
      <GameBoard turn = {turn} level = {level}></GameBoard>
      <RadioField>
        <input type="radio" name="level" value="easy" 
          onClick={() => {selectedLevel.current = 'easy'}} defaultChecked />
        <RadioLabel htmlFor="huey">Easy</RadioLabel>

        <input type="radio" name="level" value="medium" 
          onClick={() => {selectedLevel.current = 'medium'}} />
        <RadioLabel htmlFor="huey">Medium</RadioLabel>

        <input type="radio" name="level" value="hard" 
          onClick={() => {selectedLevel.current = 'hard'}} />
        <RadioLabel htmlFor="huey">Hard</RadioLabel>
      </RadioField>      
      <Button onClick={() => {
        setTurn(prev => prev + 1);
        setLevel(selectedLevel.current);
        loadingRef.current.style.display = 'block';
        setTimeout(() => {
          loadingRef.current.style.display = 'none';          
        }, 2500);
      }}> Reset </Button>
    </Container>
  );
}

export default App;
