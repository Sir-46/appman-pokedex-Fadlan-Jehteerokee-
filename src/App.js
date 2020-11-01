import React, { Component } from 'react';
import PokeList from './components/PokeList';
import Modal from './components/Modal';
import './App.css';

const COLORS = {
  Psychic: '#f8a5c2',
  Fighting: '#f0932b',
  Fairy: '#c44569',
  Normal: '#f6e58d',
  Grass: '#badc58',
  Metal: '#95afc0',
  Water: '#3dc1d3',
  Lightning: '#f9ca24',
  Darkness: '#574b90',
  Colorless: '#FFF',
  Fire: '#eb4d4b',
};

class App extends Component {
  state = {
    pokedexs: [],
    dataSource: [],
    showModal: false,
    ref: null,
  };

  handleChange = (key, value) => {
    this.setState({ [key]: value.target.value }, () => this.handleSearch());
  };

  handleSearch = () => {
    const { search } = this.state;
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `http://localhost:3030/api/cards?limit=30&name=${search}&type=`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => this.setState({ dataSource: result.cards }))
      .catch((error) => console.log('error', error));
  };

  handleAddPokedex = (value) => {
    this.setState({ pokedexs: [...this.state.pokedexs, value] });
    this.setState({
      dataSource: this.state.dataSource.filter((item) => item.id !== value.id),
    });
  };

  handleRemovePokedex = (value) => {
    this.setState({ dataSource: [...this.state.dataSource, value] });
    this.setState({
      pokedexs: this.state.pokedexs.filter((item) => item.id !== value.id),
    });
  };

  render() {
    const { pokedexs, showModal, dataSource } = this.state;

    return (
      <div className='App'>
        <Modal
          showModal={showModal}
          handleChange={this.handleChange}
          handleAddPokedex={this.handleAddPokedex}
          handleSearch={this.handleSearch}
          dataSource={dataSource}
          onClose={() => {
            this.setState({ showModal: false });
          }}
        />
        <div className='header'>
          <h1>My Pokedex</h1>
        </div>
        <div className='content'>
          <PokeList
            pokedexs={pokedexs}
            handleRemovePokedex={this.handleRemovePokedex}
          />
        </div>
        <div className='bottom-bar'>
          <div
            className='btn-add'
            onClick={() => this.setState({ showModal: true })}
          >
            +
          </div>
        </div>
      </div>
    );
  }
}

export default App;
