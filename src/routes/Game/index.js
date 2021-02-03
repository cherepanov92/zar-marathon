import { Fragment } from 'react';

import MenuHeader from '../../components/MenuHeader';
import Layout from '../../components/Layout/Layout';

const GamePage = ({ onChangePage }) => {
  const handleClick = () => {
    onChangePage && onChangePage('home');
  }

  return (
    <Fragment>
      <MenuHeader />
      <Layout 
        id='1' 
        title='This is game page !!!' 
        colorBg='#84CB55'
      >
        <div>
          <button onClick={handleClick}>Go to Homepage</button>
        </div>
      </Layout>
    </Fragment>

  );
};

export default GamePage;