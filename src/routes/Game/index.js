import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import cn from 'classnames';

import PokemonDB from '../../db';
import Bg3 from '../../assets/bg3.jpg';

import Header from '../../components/Header/Header';
import Layout from '../../components/Layout/Layout';
import PokemonCard from '../../components/PokemonCard/PokemonCard';

import style from './style.module.css';

const GamePage = () => {
  const [cardState, setCardState] = useState([...PokemonDB]);
  const history = useHistory();
  const handleClick = () => history.push('/home');

  const handleActivateCard = (card_id) => {
    setCardState(cardState => 
      cardState.map(item => item.id === card_id ? { ...item, isActive: 'isActive' in item ? !item.isActive : true} : item )
    )
  }

  return (
    <>
      <Header title='This is game page !!!'> 
        <button onClick={handleClick}>Go to Homepage</button>      
      </Header>
      <Layout 
        id='1' 
        title='Мои игровые карточки' 
        colorBg='#74E1FF'
        urlBg={Bg3}
      >
        <div className={cn(style.flex)}>
          {cardState.map(pokemon => 
            <PokemonCard 
              key={pokemon.id} 
              id={pokemon.id}
              name={pokemon.name}
              type={pokemon.type}
              img={pokemon.img}
              values={pokemon.values} 
              handleActivateCard={handleActivateCard}
              isActive={('isActive' in pokemon) && pokemon.isActive}
            />)
          }
        </div>
      </Layout>
    </>
  );
};

export default GamePage;