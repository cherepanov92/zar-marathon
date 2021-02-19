import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import cn from 'classnames';

import style from './style.module.css';

import Header from '../../components/Header/Header';
import Layout from '../../components/Layout/Layout';
import Bg3 from '../../assets/bg3.jpg';
import { plusAction, selectCount } from '../../store/counter';

function HomePage() {
  const history = useHistory();
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const handleClick = () => {
    // history.push("/game");
    dispatch(plusAction(1));
  }
  console.log(count);

  return (
    <>
      <Header title='Pokemon game'> 
        <p>Марафон по реакту от "<a className={cn(style['mentor-link'])} href="https://t.me/frontend_mentor">Zar</a>"</p>
        <button onClick={handleClick}>Go to Game</button>      
      </Header>
      <Layout 
        id='1' 
        title='Описание' 
        colorBg='#74E1FF'
        urlBg={Bg3}
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
    </>
  );
}

export default HomePage;
