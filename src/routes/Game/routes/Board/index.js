import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { PokemonContext } from '../../../../context/pokemonContext';
import PokemonCard from '../../../../components/PokemonCard/PokemonCard';

import s from './style.module.css';

const BoardPage = () => {
    const history = useHistory();
    const {pokemons} = useContext(PokemonContext);
    const [board, setBoard] = useState([])

    if (!Object.keys(pokemons).length) {
        history.replace('/game');
    }

    useEffect(async () => {
        const boardResponse = await fetch('https://reactmarathon-api.netlify.app/api/board');
        const boardRequest = await boardResponse.json();

        setBoard(boardRequest.data);
    },[])

    const handlerClickBoardPlate = (position) => {
        console.log(position);
    }

    return (
        <div className={s.root}>
						<div className={s.playerOne}>
                        {
                            Object.values(pokemons).map(({name, img, id, type, values}) =>
                            <PokemonCard 
                                key={id} 
                                id={id}
                                name={name}
                                type={type}
                                img={img}
                                values={values} 
                                minimize
                                className={s.card}
                            />)
                        }
						</div>
            <div className={s.board}>
                {
                    board.map(item => <div
                        key={item.position}
                        className={s.boardPlate}
                        onClick={() => !item.card && handlerClickBoardPlate(item.position)}
                    >
                        {
                            item.card && <PokemonCard {...item} minimize />
                        }
                    </div>)
                }
            </div>
        </div>
    );
};

export default BoardPage;