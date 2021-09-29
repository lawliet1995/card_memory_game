import React, {useState} from 'react';
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

const Container = styled.div`
  width: 100%;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

function App() {
  const [turn, setTurn] = useState(0);
  const [level, setLevel] = useState('easy');

  return (
    <Container>
      <GameBoard turn = {turn} level = {level}></GameBoard>
      <Button primary onClick={() => setTurn(prev => prev + 1)}> Reset </Button>
    </Container>
  );
}

export default App;
