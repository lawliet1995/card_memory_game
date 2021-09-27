import GameCard from '../GameCard/GameCard';
import {useState, useRef} from 'react';
import styled from 'styled-components';

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

const GameBoardDiv = styled.div`
    margin: auto;
    height: 650px;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 15px;
    align-content: center;
    perspective: 1000px;

    width: 500px;
`;

function GameBoard() {
    const [cards, setCards] = useState(() => {
        const getImageList = (level = 'easy') => {
            let totalImages = [
                card_1, card_2, card_3, card_4, card_5,
                card_6, card_7, card_8, card_9, card_10, 
                card_11, card_12, card_13, card_14, card_15, 
                card_16, card_17, card_18, card_19, card_20, 
            ];
    
            let usedImages;
    
            switch (level) {
            case 'easy': 
                usedImages = totalImages.slice(0, 10);
                break;
    
            case 'medium': 
                usedImages = totalImages.slice(0, 15);
                break;
    
            case 'hard': 
                usedImages = totalImages.slice(0, 20);
                break;
    
            default: 
                break;
            }
            return usedImages.concat(usedImages);
        }
    
        const shuffleArray = (array) => {
            var rIndex = array.length, 
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

        return shuffleArray(getImageList());
    });

    const clickID1 = useRef(null);    

    const handleClick = (src) => {
        if (clickID1.current === null) {
            clickID1.current = src;
        } else {
            if (clickID1.current === src) {
                // do some magic
            } else {
                clickID1.current = null;
            }
        }
    }
    
    return (
        <GameBoardDiv>
            {cards.map((image, i) => (
                <GameCard
                    key={i}
                    imgSrc={image}
                    onClick={() => handleClick(image)}
                />
            ))}
        </GameBoardDiv>
    );
}

export default GameBoard;