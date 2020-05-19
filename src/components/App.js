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

  changeType = (filt) => {
    this.setState({
      ...this.state,
      filters: {
        type: filt
      }
    })
  }

  fetchData = async () => {
    let type = this.state.filters.type;
    let data = await fetch(`/api/pets${type !== "all" ? `?type=${type}` : ""}`);
    this.setState({
      pets: await data.json(),
    })
  }

  adoptPet = (id) => {
    const index = this.state.pets.findIndex(pet => pet.id == id);
    this.state.pets[index].isAdopted = true;
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
              <Filters onChangeType={this.changeType} onFindPetsClick={this.fetchData} />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.adoptPet} pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
