import {Fragment} from 'react';

const GamePage = ({ onChangePage }) => {
  const handleClick = () => {
    onChangePage && onChangePage('home');
  }

  return (
    <Fragment>
      <h4>This is game page !!!</h4>
      <button onClick={handleClick}>Go to Homepage</button>
    </Fragment>

  );
};

export default GamePage;