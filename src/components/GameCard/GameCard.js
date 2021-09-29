import styled, { css } from 'styled-components';

const CardCamera = styled.div`
    border-radius: 5px;
    margin: 10px;
    cursor: pointer;
    perspective: 1000px;
    transform-style: preserve-3d;
`;

const CardSpace = styled.div`
    transform-style: preserve-3d;
    position: relative;
    width: 80px;
    height: 120px;
    transition-duration: 0.5s;
`;

const CardImg = styled.img`
    position: absolute;
    width: 80px;
    height: 120px;
    transform: translateZ(0px) rotateY(180deg);

    ${props =>
        props.primary &&
        css`
          background: palevioletred;
          color: white;
        `};
`;

const CardBack = styled.div`
    position: absolute;
    width: 80px;
    height: 120px;
    background-color: palevioletred;
`;

const GameCard = ({ imgSrc, innerRef, onClick, level }) => {
    return (
        <CardCamera onClick={onClick}>
            <CardSpace ref={innerRef}>
                <CardImg src={imgSrc} ></CardImg>
                <CardBack></CardBack>
            </CardSpace>            
        </CardCamera>
    );
};

export default GameCard;