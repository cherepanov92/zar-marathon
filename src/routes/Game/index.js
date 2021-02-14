import { useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import StartPage from './routes/Start';
import BoardPage from './routes/Board';
import FinishPage from './routes/Finish';

import { PokemonContext } from '../../context/pokemonContext';

const GamePage = () => {
  const match = useRouteMatch();
  const [selectedPokemonsP1, setSelectedPokemonsP1] = useState({});
  const [selectedPokemonsP2, setSelectedPokemonsP2] = useState({});
  const [winner, setWinner] = useState(null);

  const handleSelectedPokemons = (key, pokemons) => {
    setSelectedPokemonsP1(prevState => {
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
      pokemonSetPlayer1: selectedPokemonsP1, 
      pokemonSetPlayer2: selectedPokemonsP2, 
      winner,
      onSelectedPokemonsP1: handleSelectedPokemons,
      onSelectedPokemonsP2: ((set) => setSelectedPokemonsP2(set)),
      onSetWinner: ((winner) => setWinner(winner)),
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