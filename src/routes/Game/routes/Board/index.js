import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { PokemonContext } from '../../../../context/pokemonContext';
import PokemonCard from '../../../../components/PokemonCard/PokemonCard';
import PlayerBoard from '../../../../components/PlayerBoard';

import s from './style.module.css';

const BoardPage = () => {
    const history = useHistory();
    const {pokemons} = useContext(PokemonContext);

    const [board, setBoard] = useState([]);
    const [choiceCard, setChoiceCard] = useState(null);
    const [playerOneState, setPlayerOneState] = useState(() => {
        return Object.values(pokemons).map(item => ({
            ...item,
            possession: 'blue',
        }))
    });
    const [playerTwoState, setPlayerTwoState] = useState([]);

    if (!Object.keys(pokemons).length) {
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
    },[])

    const handlerClickBoardPlate = async (position) => {
        console.log('position', position);
        console.log('choiceCard', choiceCard);
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
            setBoard(response.data);
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