import { Fragment } from 'react';

import MenuHeader from '../../components/MenuHeader';
import Header from '../../components/Header/Header';

const GamePage = ({ onChangePage }) => {
  const handleClick = () => {
    onChangePage && onChangePage('home');
  }

  return (
      <Header title='This is game page !!!'> 
        <button onClick={handleClick}>Go to Homepage</button>      
      </Header>
  );
};

export default GamePage;