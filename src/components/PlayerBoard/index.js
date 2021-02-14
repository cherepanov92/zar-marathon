import { useState } from 'react';
import cn from 'classnames';

import PokemonCard from '../PokemonCard/PokemonCard';
import style from './style.module.css';


const PlayerBoard = ({ player, cards, onClickCard }) => {
  const [isSelected, setIsSelected] = useState(null);

  return (
    <>
      {
        cards.map((item) => (
          <PokemonCard 
            key={item.id} 
            id={item.id}
            name={item.name}
            type={item.type}
            img={item.img}
            values={item.values} 
            minimize
            isActive
            className={cn(style.cardBoard, {[style.selected] : isSelected === item.id})}
            handleSelectCard = {() => {
              setIsSelected(item.id)
              onClickCard && onClickCard({
                player,
                ...item
              })
            }}
          />
        ))
      }
    </>
  )
};

export default PlayerBoard;