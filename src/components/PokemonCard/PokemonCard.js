import cn from 'classnames';

import style from './style.module.css';

const PokemonCard = ({id, name, type, img, values, minimize, className, possession, isActive=true, isSelected=false, handleSelectCard}) => {

  const onClick = () => {
    handleSelectCard && handleSelectCard();
  }

  return ( 
    <div 
      className={cn(className, style.pokemonCard, {[style.active]: isActive === true, [style.selected]: isSelected === true})}
      onClick={onClick} 
    >
      <div className={cn(style.cardFront)}>
        <div className={cn(style.wrap, style.front)}>
          <div 
            className={cn(style.pokemon, style[type], style[possession])}
          >

            <div className={cn(style.values)}>
              <div className={cn(style.count, style.top)}>
                {values.top}
              </div>
              <div className={cn(style.count, style.right)}>
                {values.right}
              </div>
              <div className={cn(style.count, style.bottom)}>
                {values.bottom}
              </div>
              <div className={cn(style.count, style.left)}>
                {values.left}
              </div>
            </div>

            <div className={cn(style.imgContainer)}>
                <img src={img} alt={name} />
            </div>

            { !minimize && (<div className={cn(style.info)}>
              <span className={cn(style.number)}>
                {id}
              </span>
              <h3 className={cn(style.name)}>
                {name}
              </h3>
              <small className={cn(style.type)}>
                Type: <span>{type}</span>
              </small>
            </div>) }

          </div>
        </div>
      </div>

      <div className={cn(style.cardBack)}>
        <div className={cn(style.wrap, style.back)} />
      </div>

    </div>
  )
}

export default PokemonCard;
