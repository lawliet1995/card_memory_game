import React, {useState} from 'react';
import styled from 'styled-components'
import GameBoard from './components/GameBoard/GameBoard';

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`

function App() {
  const [turn, setTurn] = useState(0);

  return (
    <div>
      <GameBoard></GameBoard>
      <Button primary onClick={() => setTurn(turn + 1)}> Reset </Button>
    </div>
  );
}

export default App;
