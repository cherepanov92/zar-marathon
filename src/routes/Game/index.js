import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import cn from 'classnames';

import database from '../../service/firebase';
import Bg3 from '../../assets/bg3.jpg';

import Header from '../../components/Header/Header';
import Layout from '../../components/Layout/Layout';
import PokemonCard from '../../components/PokemonCard/PokemonCard';

import style from './style.module.css';

const GamePage = () => {
  const [cardState, setCardState] = useState({});
  const history = useHistory();
  const handleClick = () => history.push('/home');

  useEffect(() => {
    database.ref('pokemons')
    .once('value', (snapshot) => {
      setCardState(snapshot.val());
    })
  }, []);

  const handleActivateCard = (card_key) => { 
    const update_card = {...cardState[card_key], active: 'active' in cardState[card_key] ? !cardState[card_key].active : true }

    database.ref(`pokemons/${card_key}`)
    .set(update_card)
    .then(setCardState(prevState => {
      const newState = prevState;
      newState[card_key] = update_card;
      return {...newState}
    }))
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
          {
            Object.entries(cardState).map(([key, {name, img, id, type, values, active}]) =>
            <PokemonCard 
              key={key} 
              card_key={key} 
              id={id}
              name={name}
              type={type}
              img={img}
              values={values} 
              handleActivateCard={handleActivateCard}
              isActive={active}
            />)
          }
        </div>
      </Layout>
    </>
  );
};

export default GamePage;