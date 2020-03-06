import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  handleChangeType = event => {
    this.setState({
      [state.filters.type]: event.target.value
    })
  }

  onFindPetsClick = () => {
    let url = '/api/pets';
    let type = this.state.filters.type;

    if(type != 'all') url =  '/api/pets?type=' + type
    fetch(url)
    .then(response => response.json())
    .then(json => {this.setState({pets:json})})
  }

  
  // Took help! Study own later!

  onAdoptPet = (id) => {
    let pets = this.state.pets.slice(0);

    pets[pets.findIndex(p => p.id === id)].isAdopted = true;
    this.setState({
      'pets': pets,
    });
  }

  ///////

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.handleChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
