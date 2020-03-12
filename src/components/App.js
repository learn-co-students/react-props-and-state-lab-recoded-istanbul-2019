import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters : {
        type: 'all'
      }
    }
  }

  onChangeType = (event)=>{
    this.setState({
      filters:{
        type:event
      }
    })
  }

  onFindPetsClick =() => {
  console.log(this.state);
  let fetchLink=''
    
  if(this.state.filters.type==='all'){
    fetchLink+='/api/pets' 
  }else{
    fetchLink+=`/api/pets?type=${this.state.filters.type}`
  }

  fetch(fetchLink)
  .then(res=>res.json())
  .then(json=>this.setState({pets:json}))
 }


 
  onAdoptPet = (id)=>{
    this.state.pets[this.state.pets.findIndex(pet=>pet.id===id)].isAdopted = true
  }

  render() {
  console.log(this.state);
    
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters 
              onChangeType={this.onChangeType}
              onFindPetsClick={this.onFindPetsClick}/>
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
