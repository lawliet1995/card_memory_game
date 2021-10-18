import GameCard from '../GameCard/GameCard';
import {useState, useRef, useEffect} from 'react';
import styled, { css } from 'styled-components';

import card_1 from '../../assets/1.jpg';
import card_2 from '../../assets/2.jpg';
import card_3 from '../../assets/3.jpg';
import card_4 from '../../assets/4.jpg';
import card_5 from '../../assets/5.jpg';
import card_6 from '../../assets/6.jpg';
import card_7 from '../../assets/7.jpg';
import card_8 from '../../assets/8.jpg';
import card_9 from '../../assets/9.jpg';
import card_10 from '../../assets/10.jpg';
import card_11 from '../../assets/11.jpg';
import card_12 from '../../assets/12.jpg';
import card_13 from '../../assets/13.jpg';
import card_14 from '../../assets/14.jpg';
import card_15 from '../../assets/15.jpg';
import card_16 from '../../assets/16.jpg';
import card_17 from '../../assets/17.jpg';
import card_18 from '../../assets/18.jpg';
import card_19 from '../../assets/19.jpg';
import card_20 from '../../assets/20.jpg';

let setTimeoutId = 0;

const GameBoardDiv = styled.div`
    margin: auto;
    display: grid;
    margin-bottom: 15px;
    align-content: center;
    perspective: 1000px;
    
    ${props => {
        let gridSetting;
            switch (props.level) {
                case 'hard':
                    gridSetting = css`
                        grid-template-columns: repeat(9, 1fr);
                        width: 900px;
                    `
                    break;
                case 'medium':
                    gridSetting = css`
                        grid-template-columns: repeat(7, 1fr);
                        width: 700px;
                    `
                    break;
                default:
                case 'easy':
                    gridSetting = css`
                        grid-template-columns: repeat(5, 1fr);
                        width: 500px;
                    `
                    break;
            }
            return gridSetting;
        }
    }
`;

function GameBoard({turn, level}) {
    const [cards, setCards] = useState([]);

    const firstClickId = useRef(null);
    const firstClickIndex = useRef(null);
    const preventClick = useRef(false);
    const imagesRef = useRef([]);

    useEffect(() => {
        const getImageList = (level = 'easy') => {
            let totalImages = [
                card_1, card_2, card_3, card_4, card_5,
                card_6, card_7, card_8, card_9, card_10, 
                card_11, card_12, card_13, card_14, card_15, 
                card_16, card_17, card_18, card_19, card_20, 
            ];
    
            let usedImages, imageObjs;
    
            switch (level) {
            case 'hard': 
                usedImages = totalImages.slice(0, 18);
                break;

            case 'medium': 
                usedImages = totalImages.slice(0, 14);
                break;

            case 'easy': 
            default: 
                usedImages = totalImages.slice(0, 10);
                break;
            }

            imageObjs = usedImages.map((item, index) => {
                return {
                    src: item,
                    id: index
                }
            })
            return imageObjs.concat(imageObjs);
        };
    
        const shuffleArray = (array) => {
            for (let k = 3; k >= 0; k--){ //shuffle 3 times
                let rIndex = array.length, 
                    temp, 
                    i;
    
                while (rIndex) {      
                    i = Math.floor(Math.random() * rIndex--);
                
                    temp = array[rIndex];
                    array[rIndex] = array[i];
                    array[i] = temp;
                }
            
                return array;
            }            
        }

        if (imagesRef.current.length > 0) {
            for (let iRef of imagesRef.current) {
                if (iRef) {
                    iRef.style.transform = 'rotateY(0deg)';
                }
            }
        }

        firstClickId.current = null;
        firstClickIndex.current = null;
        preventClick.current = false;

        setCards(shuffleArray(getImageList(level)));

        return () => {clearTimeout(setTimeoutId)}
    }, [turn, level]);

    const handleClick = (id, index) => {
        if (preventClick.current || imagesRef.current[index].disappear) return;

        imagesRef.current[index].style.transform = 'rotateY(180deg)';

        if (firstClickId.current === null) {
            firstClickId.current = id;
            firstClickIndex.current = index;
        } else {
            preventClick.current = true;

            setTimeoutId = setTimeout(() => {
                if (firstClickId.current === id) {
                    imagesRef.current[index].style.transform = 'rotateY(180deg) scale(0)';
                    imagesRef.current[firstClickIndex.current].style.transform = 'rotateY(180deg) scale(0)';
                    imagesRef.current[index].disappear = true;
                    imagesRef.current[firstClickIndex.current].disappear = true;
                } else {
                    imagesRef.current[index].style.transform = 'rotateY(0deg)';
                    imagesRef.current[firstClickIndex.current].style.transform = 'rotateY(0deg)';
                }
                                
                firstClickId.current = null;
                firstClickIndex.current = null;
                preventClick.current = false;
            }, 1000);
            
        }
    }
    
    return (
        <GameBoardDiv level={level}>
            {cards.map((imageObj, i) => (
                <GameCard
                    key = {i}
                    innerRef = {el => imagesRef.current[i] = el}
                    imgSrc = {imageObj.src}
                    onClick = {() => handleClick(imageObj.id, i)}
                    level = {level}
                />
            ))}
        </GameBoardDiv>
    );
}

export default GameBoard;