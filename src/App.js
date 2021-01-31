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

      <Layout 
        id='2' 
        title='Мои карточки' 
        colorBg='#74E1FF'
        urlBg={Bg3}
      >
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

      <Layout 
        id='3' 
        title='Описание' 
        colorBg='#84CB55'
      >
          <p>
            В игре два игрока сталкиваются друг с другом, одна сторона играет «синими», а другая «красными» на сетке 3x3.
            У каждого игрока в руке по пять карт, и цель состоит в том, чтобы захватить карты противника, превратив их в красный 
            или синий цвет игрока.
          </p>
          <p>
            Чтобы выиграть, большинство из десяти разыгранных карт (включая одну карту, которая не находится на доске) 
            должны быть цвета карты игрока. Для этого игрок должен захватить карты, поместив карту рядом с картой оппонента, 
            после чего будут сравниваться «ранги» сторон, на которых соприкасаются две карты. Если ранг карты противника выше, 
            чем у карты игрока, карта игрока будет захвачена и превращена в цвет соперника. Если ранг игрока выше, 
            карта противника будет захвачена и заменена на цвет игрока.
          </p>
      </Layout>
      <Footer />
    </>
  );
}

export default App;
