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

  fetchPets = () => {
    const rootURL = `/api/pets`
    let fetchURL;

    switch (this.state.filters.type) {
      case 'cat':
        fetchURL = rootURL + `?type=cat`;
        break;
      case 'dog':
        fetchURL = rootURL + `?type=dog`;
        break;
      case 'micropig':
        fetchURL = rootURL + `?type=micropig`;
        break;
      default:
        fetchURL = rootURL;
    }

    fetch(fetchURL)
      .then(response => response.json())
      .then(petsArray => this.updatePets(petsArray))
  }

  updatePets = (filteredPets) => {
    this.setState(prevState => ({
      pets: filteredPets
    }))
  }

  handleAdoption = petId => {
    const pets = this.state.pets.map((petObject) => {
      return petObject.id === petId ? { ...petObject, isAdopted: true } : petObject;
    });
    this.setState( { pets });
  };

  render() {
    return (
 <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters filterApplied={this.state.filters.type} onChangeType={this.handleOnChangeType} onFindPetsClick={this.fetchPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.handleAdoption} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App