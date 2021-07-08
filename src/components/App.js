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
  onAdoptPet= (id) => {
  let pety =  this.state.pets.findIndex(el => el.id === id);
      this.state.pets[pety].isAdopted = true
  }
  handleChangeType=event=>{
    this.setState({
      filters:{type:event.target.value}
    })
  }
onFindPetsClick=()=>{
         let url='/api/pets'
         let str = this.state.filters.type;
         if(str!='all') url =`/api/pets?type=${str}`
         fetch(url)
         .then(res => res.json())
         .then(json => {this.setState({pets:json})})
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
              <Filters onChangeType = {this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet ={this.onAdoptPet} pets={this.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}




export default App
