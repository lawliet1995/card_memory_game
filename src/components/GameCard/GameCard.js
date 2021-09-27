import styled, { css } from 'styled-components'

const CardSpace = styled.div`
    border-radius: 5px;
    margin: 10px;
    cursor: pointer;
    overflow: hidden;
    transform-style: preserve-3d;
    transition: transform 0.5s;
`;

const CardImg = styled.img`
    width: 80px;
    height: 120px;

    ${props =>
        props.primary &&
        css`
          background: palevioletred;
          color: white;
        `};
`;

const GameCard = ({ imgSrc, onClick }) => {
  return (
    <CardSpace onClick={onClick}>
      <CardImg src={imgSrc}></CardImg>
    </CardSpace>
  );
};

export default GameCard;