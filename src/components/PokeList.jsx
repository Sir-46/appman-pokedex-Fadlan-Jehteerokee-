import React from 'react';
import PokeItem from './PokeItem';

const PokeList = ({ pokedexs, handleRemovePokedex }) => {
  return (
    <div className='list'>
      {pokedexs.map((item, index) => {
        return (
          <PokeItem
            key={index}
            poke={item}
            handleRemovePokedex={handleRemovePokedex}
          />
        );
      })}
    </div>
  );
};

export default PokeList;
