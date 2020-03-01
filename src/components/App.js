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

  handleTypeChange = (type)=>{
    console.log(type)
    this.setState({
      filters:{
        type 
      }
    });
  }

  onFindPetsClick = ()=>{
    let link = ""
    this.state.filters.type ==="all" ?
    link= "/api/pets":
    link= "/api/pets?type="+this.state.filters.type
    fetch(link)
    .then(res => res.json())
    .then(data => 
      this.setState({
        pets: data
      })
      )
    .catch(err => console.log(err))
  }
  onAdoptPet = (id)=>{
    const index= this.state.pets.findIndex((item)=>item.id === id)
    const newPets = [...this.state.pets]
    newPets[index].isAdopted = true;
    this.setState({
      pets:newPets
    });
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
              <Filters 
              onFindPetsClick={this.onFindPetsClick}
              onChangeType={this.handleTypeChange}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser 
              pets={this.state.pets}
              onAdoptPet={this.onAdoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
