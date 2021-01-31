import './App.css';
import PokemonDB from './db';
import PokemonCard from './components/PokemonCard/PokemonCard';

import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer';

import Bg1 from './assets/bg1.jpg';
import Bg2 from './assets/bg2.jpg';
import Bg3 from './assets/bg3.jpg';

function App() {
  return (
    <>
      <Header title='title' descr='descr'/>
      {/* <Layout 
        id='1' 
        title='title 1' 
        urlBg={Bg1}
      >
      </Layout> */}
      <Layout id='2' title='Мои карточки' colorBg='red'>
        <div className='flex'>
          {PokemonDB.map(pokemon => 
            <PokemonCard 
              key={pokemon.id} 
              id={pokemon.id}
              name={pokemon.name}
              type={pokemon.type}
              img={pokemon.img}
              values={pokemon.values} 
            />)
          }
        </div>
      </Layout>
      {/* <Layout id='3' title='title 3' urlBg={Bg2}>
        <h1>test 3</h1>
      </Layout> */}
      <Footer />
    </>
  );
}

export default App;
