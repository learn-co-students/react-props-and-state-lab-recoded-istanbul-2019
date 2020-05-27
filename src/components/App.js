import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  
  onChangeType = (e) => {
    this.setState = {
      filters: {
        type: e.target.value
      }
    }
  }

  onFindPetsClick = () => {
    const type = this.state.filters.type
    let URL = ''
    if(type === 'all') {
      URL += '/api/pets'
    } else {
      URL += `/api/pets?type=${type}`
    }
    fetch(URL)
    .then(res => res.json())
    .then(data => this.setState({
      pets : data
    }))
  }

  onAdoptPet = (id) => {
    const pets = this.state.pets
    pets[pets.findIndex((e) =>
     e.id === id)].isAdopted = true
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.props.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
