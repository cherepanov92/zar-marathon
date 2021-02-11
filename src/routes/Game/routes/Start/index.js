import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import cn from 'classnames';

import Bg3 from '../../../../assets/bg3.jpg';

import Header from '../../../../components/Header/Header';
import Layout from '../../../../components/Layout/Layout';
import PokemonCard from '../../../../components/PokemonCard/PokemonCard';

import style from './style.module.css';
import { FirebaseContext } from '../../../../context/firebaseContext';
import { PokemonContext } from '../../../../context/pokemonContext';


const StartPage = () => {
  const firebase = useContext(FirebaseContext);
  const selectedCard = useContext(PokemonContext);
  const [cardState, setCardState] = useState({});
  const history = useHistory();
  const handleClickHome = () => history.push('/home');
  const handleClickStartGame = () => history.push('/game/board');

  useEffect(() => {
    firebase.getPokemonsSoket((cards) => {
      setCardState(cards)
    });

    return () => firebase.offPokemonsSoket();
  }, []);

  const handleChangeSelected = (key) => { 
    const pokemon = {...cardState[key]};
    selectedCard.onSelectedPokemons(key, pokemon);

    setCardState(prevState => ({
      ...prevState,
      [key]: {
        ...prevState[key],
        selected: !prevState[key].selected
      }
    }))
  }

  return (
    <>
      <Header title='This is game page !!!'> 
        <button onClick={handleClickHome}>Go to Homepage</button>      
      </Header>
      <Layout 
        id='1' 
        title='Мои игровые карточки' 
        colorBg='#74E1FF'
        urlBg={Bg3}
      >
        <button onClick={handleClickStartGame}>Start game</button>
        <div className={cn(style.flex)}>
          {
            Object.entries(cardState).map(([key, {name, img, id, type, values, selected}]) =>
            <PokemonCard 
              key={key} 
              id={id}
              name={name}
              type={type}
              img={img}
              values={values} 
              handleSelectCard={() => handleChangeSelected(key)}
              isActive={true}
              isSelected={selected}
            />)
          }
        </div>
      </Layout>
    </>
  );
};

export default StartPage;