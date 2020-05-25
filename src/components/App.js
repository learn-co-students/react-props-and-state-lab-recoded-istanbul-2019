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
  changeTypeHandler = (value) => {
    this.setState({
      filters: { ...this.state.filters, type: value }
    })
  }
  onFindPetsClickHandler = async () => {
    let quary = `/api/pets${this.state.filters.type === "all" ? "" : `?type=${this.state.filters.type}`}`
    let data = await fetch(quary)
    data = await data.json()
    this.setState({
      pets: data
    })
  }

  adoptPetHandler = (id) => {
    const pet = this.state.pets.map((animal) => {
      return animal.id === id ? { ...animal, isAdopted: true } : p
    })
    this.setState({
      pets: pet
    })
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
              <Filters onChangeType={this.changeTypeHandler} onFindPetsClick={this.onFindPetsClickHandler} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.adoptPetHandler} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
