import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import cn from 'classnames';

import database from '../../../../service/firebase';
import Bg3 from '../../../../assets/bg3.jpg';

import Header from '../../../../components/Header/Header';
import Layout from '../../../../components/Layout/Layout';
import PokemonCard from '../../../../components/PokemonCard/PokemonCard';

import style from './style.module.css';
import { FirebaseContext } from '../../../../context/firebaseContext';

const StartPage = () => {
  const firebase = useContext(FirebaseContext);
  const [cardState, setCardState] = useState({});
  const history = useHistory();
  const handleClick = () => history.push('/home');

  useEffect(() => {
    firebase.getPokemonsSoket((cards) => {setCardState(cards)})
  }, []);

  const handleActivateCard = (id) => { 
    // todo: разобрать
    setCardState(prevState => {
      return Object.entries(prevState).reduce((acc, item) => {
        const pokemon = {...item[1]};
        if (pokemon.id === id) {
          pokemon.active = !pokemon.active;
        }

        acc[item[0]] = pokemon;
        firebase.postPokemon(item[0], pokemon);

        return acc;
      }, {});
    })
  }

  const handleAddPikachuCard = () => { 
    const new_card = {
      "abilities" : [ "static", "lightning-rod" ],
      "base_experience" : 112,
      "height" : 4,
      "id" : 1125,
      "img" : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      "name" : "pika-pikachu",
      "stats" : {
        "attack" : 55,
        "defense" : 40,
        "hp" : 35,
        "special-attack" : 50,
        "special-defense" : 50,
        "speed" : 90
      },
      "type" : "electric",
      "values" : {
        "bottom" : 9,
        "left" : 6,
        "right" : "A",
        "top" : 8
      }
    }

    firebase.addPokemon(new_card);
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
        <button onClick={handleAddPikachuCard}>Добавить Пикачу</button>
        <div className={cn(style.flex)}>
          {
            Object.entries(cardState).map(([key, {name, img, id, type, values, active}]) =>
            <PokemonCard 
              key={key} 
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

export default StartPage;