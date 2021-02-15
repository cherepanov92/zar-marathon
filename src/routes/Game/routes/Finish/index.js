import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import cn from 'classnames';

import { PokemonContext } from '../../../../context/pokemonContext';
import { FirebaseContext } from '../../../../context/firebaseContext';
import style from './style.module.css';

import Layout from '../../../../components/Layout/Layout';
import PokemonCard from '../../../../components/PokemonCard/PokemonCard';

const FinishPage = () => {
  const history = useHistory();
  const { winner, ...gameResult } = useContext(PokemonContext);
  const firebase = useContext(FirebaseContext);
  const handleClickEndGame = () => {
    winner && firebase.addPokemon(wonСard);
    history.push('/game/');
  }
  const [wonСard, setWonCard] = useState(null);

  if (!winner) {
    history.replace('/game');
  }

  return (
    <>
      <Layout 
        id='1' 
        title='Game over' 
        colorBg='#74E1FF'
      >
        <div className={cn(style.grid)}>
          {
            Object.values(gameResult.pokemonSetPlayer1).map((item) => (
              <PokemonCard 
                key={item.id} 
                id={item.id}
                name={item.name}
                type={item.type}
                img={item.img}
                values={item.values} 
                minimize
                isActive
                className={style.card}
              />
            ))
          }
        </div>

        {winner === 1 && !wonСard ?
          <button>Выбери призовую карту соперника! </button>:
          <button onClick={handleClickEndGame}>New game</button>
        }

        <div className={cn(style.grid)}>
          {
            gameResult.pokemonSetPlayer2.map((item) => (
              <PokemonCard 
                key={item.id} 
                id={item.id}
                name={item.name}
                type={item.type}
                img={item.img}
                values={item.values} 
                minimize
                isActive
                className={style.card}
                handleSelectCard={() => {
                  if(winner === 1) {
                    setWonCard(item);
                  }
                }}
              />
            ))
          }
        </div>
      </Layout>
    </>
  );
};

export default FinishPage;