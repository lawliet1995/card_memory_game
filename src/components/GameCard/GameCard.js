import styled, { css } from 'styled-components';

const CardCamera = styled.div`
    border-radius: 5px;
    margin: 10px;
    cursor: pointer;
    transform-style: preserve-3d;
    transition: transform 0.5s;
`;

const CardSpace = styled.div`
    position: relative;
    width: 80px;
    height: 120px;
`;

const CardImg = styled.img`
    position: absolute;
    width: 80px;
    height: 120px;
    transform: translateZ(-1px) rotateY(180deg);

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

const GameCard = ({ imgSrc, innerRef, onClick }) => {
    return (
        <CardCamera onClick={onClick}>
            <CardSpace>
                <CardImg ref={innerRef} src={imgSrc} ></CardImg>
                <CardBack></CardBack>
            </CardSpace>            
        </CardCamera>
    );
};

export default GameCard;