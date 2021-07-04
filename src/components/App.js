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
  onChangeTypeFunc = (typeValue) => {
    return this.setState({
      filters: {
        type: typeValue
      }
    })
  }
  handlePetsClick = async () => {
    let typeHolder, holder;
    if (this.state.filters.type === 'all') {
      typeHolder = '/api/pets';
    } else {
      typeHolder = '/api/pets?type=' + this.state.filters.type;
    }
    const response = await fetch(typeHolder);
    const data = await response.json();
    this.setState({
      pets: data
    })
  }
  onAdoptPet = (petID) => {
    if (petID) {
      let holder = this.state.pets.map(pet => pet.id === petID ? { ...pet, isAdopted: true } : pet);
      return this.setState({
        pets: holder
      })
    }
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeTypeFunc} onFindPetsClick={this.handlePetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
