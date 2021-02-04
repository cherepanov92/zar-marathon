import { useHistory } from 'react-router-dom';

import Header from '../../components/Header/Header';

const GamePage = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/home');
  }

  return (
      <Header title='This is game page !!!'> 
        <button onClick={handleClick}>Go to Homepage</button>      
      </Header>
  );
};

export default GamePage;