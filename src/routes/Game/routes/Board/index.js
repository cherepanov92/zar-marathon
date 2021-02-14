import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { PokemonContext } from '../../../../context/pokemonContext';
import PokemonCard from '../../../../components/PokemonCard/PokemonCard';
import PlayerBoard from '../../../../components/PlayerBoard';

import s from './style.module.css';

const counterWin = (board, playerOneState, playerTwoState) => {
    let playerOneCount = playerOneState.length;
    let playerTwoCount = playerTwoState.length;

    board.forEach(item => {
        if(item.card.possession === 'red') {
            playerTwoCount++; 
        } else if (item.card.possession === 'blue') {
            playerOneCount++;
        }
    })

    return [playerOneCount, playerTwoCount];
}

const BoardPage = () => {
    const history = useHistory();
    const { pokemonSetPlayer1, onSelectedPokemonsP2, onSetWinner } = useContext(PokemonContext);

    const [board, setBoard] = useState([]);
    const [choiceCard, setChoiceCard] = useState(null);
    const [playerOneState, setPlayerOneState] = useState(() => {
        return Object.values(pokemonSetPlayer1).map(item => ({
            ...item,
            possession: 'blue',
        }))
    });
    const [playerTwoState, setPlayerTwoState] = useState([]);
    const [steps, setSteps] = useState(0);

    if (!Object.keys(pokemonSetPlayer1).length) {
        history.replace('/game');
    }

    useEffect(async () => {
        const boardRequest = await fetch('https://reactmarathon-api.netlify.app/api/board');
        const boardResponse = await boardRequest.json();
        setBoard(boardResponse.data);

        const playerTwoRequest = await fetch('https://reactmarathon-api.netlify.app/api/create-player');
        const playerTwoResponse = await playerTwoRequest.json();
        setPlayerTwoState(Object.values(playerTwoResponse.data).map(item => ({
            ...item,
            possession: 'red',
        })))

        onSelectedPokemonsP2(playerTwoResponse.data);
    },[])

    useEffect(() => {
        if(steps === 9) {
            const [count1, count2] = counterWin(board, playerOneState, playerTwoState)
        
            if (count1 > count2) {
                onSetWinner(1);
                alert('win');
            } else if (count1 < count2){
                onSetWinner(2);
                alert('lose');
            } else {
                onSetWinner(3);
                alert('draw');
            }
            history.replace('/game/finish');
        }

    }, [steps])

    const handlerClickBoardPlate = async (position) => {
        if (choiceCard) {
            const params = {
                position,
                card: choiceCard,
                board,
            };

            const request = await fetch('https://reactmarathon-api.netlify.app/api/players-turn', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                }, 
                body: JSON.stringify(params),
            });

            const response = await request.json();
            
            if(choiceCard.player === 1) {
                setPlayerOneState(prevState => prevState.filter(card => card.id !== choiceCard.id))
            }
            
            if(choiceCard.player === 2) {
                setPlayerTwoState(prevState => prevState.filter(card => card.id !== choiceCard.id))
            }
            
            setBoard(response.data);
            setSteps(prevState => (prevState + 1))
        }
    }

    return (
        <div className={s.root}>
            <div className={s.playerOne}>
                <PlayerBoard 
                    player={1}
                    cards={Object.values(playerOneState)} 
                    onClickCard={(card) => setChoiceCard(card)}
                />
            </div>
            <div className={s.playerTwo}>
                <PlayerBoard 
                    player={2}
                    cards={playerTwoState} 
                    onClickCard={(card) => setChoiceCard(card)}
                />
            </div>
            <div className={s.board}>
                {
                    board.map(item => 
                        <div
                            key={item.position}
                            className={s.boardPlate}
                            onClick={() => !item.card && handlerClickBoardPlate(item.position)}
                        >
                            {item.card && <PokemonCard {...item.card} minimize />}
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default BoardPage;