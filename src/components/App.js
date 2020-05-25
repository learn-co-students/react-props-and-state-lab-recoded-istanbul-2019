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

  onChangeType = event => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: event,
      }

    })
  }
  // ?type=${this.state.filters.type}`
  onFindPetsClick = async () => {
    let filterType = this.state.filters.type;
    let data = await fetch(`/api/pets${filterType !== "all" ? `?type=${filterType}` : ""}`)
    let resulte = await data.json();
    this.setState({
      pets: resulte,
    })
  }
  
  onAdoptPet = id => {
    let pets = this.state.pets.map((curr) => {
      if(curr.id === id) {
        return {...curr, isAdopted: true}
      }else {
        return curr
      }
    })
    this.setState({
      pets: pets,
    })
  }

  render() {
    return (
      <div className="ui container">
        {/* {this.onFindPetsClick()} */}
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
