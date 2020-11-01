import React from 'react';
import { hpCal, strCal, weakCal, happinessCal } from '../tools';

const PokeItem = ({ poke, handleRemovePokedex }) => {
  return (
    <div className='item'>
      <img src={poke.imageUrl} alt={poke.name} />
      <div className='detail'>
        <div className='btn-add' onClick={() => handleRemovePokedex(poke)}>
          X
        </div>
        <h1>{poke.name}</h1>
        <div className='hp'>
          <p>HP</p>
          <div className='level'>
            <div className='bar' style={{ width: `${hpCal(poke.hp)}%` }} />
          </div>
        </div>
        <div className='str'>
          <p>STR</p>
          <div className='level'>
            <div
              className='bar'
              style={{ width: `${strCal(poke.attacks)}%` }}
            />
          </div>
        </div>
        <div className='weak'>
          <p>WEAK</p>
          <div className='level'>
            <div
              className='bar'
              style={{ width: `${weakCal(poke.weaknesses)}%` }}
            />
          </div>
        </div>
        <div className='cutes'>
          {Array.from(
            Array(happinessCal(poke.hp, poke.attacks, poke.weaknesses)),
            (e, i) => {
              return (
                <img
                  key={i}
                  className='cute'
                  src={require('../cute.png')}
                  alt='cute'
                  width='40'
                />
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default PokeItem;
