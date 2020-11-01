import React, { useEffect, useRef } from 'react';
import { hpCal, strCal, weakCal, happinessCal } from '../tools';

const Modal = ({
  showModal,
  dataSource,
  handleSearch,
  search,
  handleChange,
  handleAddPokedex,
  onClose,
}) => {
  const ref = useRef();

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const handleClick = (e) => {
    if (ref.current.contains(e.target)) {
      return;
    }

    onClose();
  };

  return (
    <div className={`${showModal ? 'open' : ''} modal`}>
      <div className='body' ref={ref}>
        <div className='search-bar'>
          <input
            type='text'
            className='input'
            placeholder='Find pokemon'
            value={search}
            onChange={(e) => handleChange('search', e)}
          />
          <div className='btn-search' onClick={handleSearch}>
            <img src={require('../search.png')} alt='search' width='40' />
          </div>
        </div>
        <div className='list'>
          {dataSource.map((item, index) => {
            return (
              <div className='item' key={index}>
                <img src={item.imageUrl} alt={item.name} />
                <div className='detail'>
                  <div
                    className='btn-remove'
                    onClick={() => handleAddPokedex(item)}
                  >
                    Add
                  </div>
                  <h1>{item.name}</h1>
                  <div className='hp'>
                    <p>HP</p>
                    <div className='level'>
                      <div
                        className='bar'
                        style={{ width: `${hpCal(item.hp)}%` }}
                      />
                    </div>
                  </div>
                  <div className='str'>
                    <p>STR</p>
                    <div className='level'>
                      <div
                        className='bar'
                        style={{ width: `${strCal(item.attacks)}%` }}
                      />
                    </div>
                  </div>
                  <div className='weak'>
                    <p>WEAK</p>
                    <div className='level'>
                      <div
                        className='bar'
                        style={{ width: `${weakCal(item.weaknesses)}%` }}
                      />
                    </div>
                  </div>
                  <div className='cutes'>
                    {Array.from(
                      Array(
                        happinessCal(item.hp, item.attacks, item.weaknesses)
                      ),
                      (e, i) => {
                        return (
                          <div key={i} className='cute'>
                            <img
                              src={require('../cute.png')}
                              alt='cute'
                              width='40'
                            />
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Modal;
