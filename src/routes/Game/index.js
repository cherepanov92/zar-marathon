import { useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import StartPage from './routes/Start';
import BoardPage from './routes/Board';
import FinishPage from './routes/Finish';

import { PokemonContext } from '../../context/pokemonContext';

const GamePage = () => {
  const match = useRouteMatch();
  const [selectedPokemons, setSelectedPokemons] = useState({});

  const handleSelectedPokemons = (key, pokemons) => {
    setSelectedPokemons(prevState => {
      // Проверяем если пришедший ключ уже есть в объекте
      if (prevState[key]) {
        const copyState = {...prevState};
        delete copyState[key];
        return copyState;
      }
      return {
        ...prevState,
        [key]: pokemons
      }
    })
  }

  return (
    <PokemonContext.Provider value={{
      pokemons: selectedPokemons, 
      onSelectedPokemons: handleSelectedPokemons
    }}>
      <Switch>
        <Route path={`${match.path}/`} exact component={StartPage} />
        <Route path={`${match.path}/board`} component={BoardPage} />
        <Route path={`${match.path}/finish`} component={FinishPage} />
      </Switch>
    </PokemonContext.Provider>
  );
};

export default GamePage;