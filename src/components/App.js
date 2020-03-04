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
  
  handleChangeType=event=>{
    this.setState({
      filters:{type:event.target.value}
    })
  }
  
  onFindPetsClick=()=>{
    let url='/api/pets'
    let type = this.state.filters.type;
    if(type!='all') url =`/api/pets?type=${type}`
    fetch(url)
    .then(res => res.json())
    .then(json => {this.setState({pets:json})})
  }
  
  onAdoptPet=(id)=>{
    let ad =this.state.pets.findIndex(e=>e.id==id)
    this.state.pets[ad].isAdopted=true
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
              <Filters onChangeType={this.handleChangeType} onFindPetsClick={this.onFindPetsClick}/>
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
