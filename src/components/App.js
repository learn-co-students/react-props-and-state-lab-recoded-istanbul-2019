import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'
import pets from '../data/pets'

const URL = '/api/pets'

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

  fetchAll = async () =>{
    if(this.state.filters.type === 'all'){
      const pets = await fetch(URL);
      const result = await pets.json(); 
      this.findPetsClick(result);
    }else{
      const pets = await fetch(URL + `?type=${this.state.filters.type}`);
      const result = await pets.json(); 
      this.findPetsClick(result);
    }
      
  }

  changeType = (e) =>{
    this.setState({
      filters : {
        type:e.target.value,
      }
     
    })
    console.log(this.state.filters.type)
  }


  findPetsClick = (data) =>{
    this.setState({
      pets:data
    })
    console.log(this.state.pets)
   
  }

  isAdopted = (id) =>{

    const index = this.state.pets.findIndex(pet => pet.id === id);
    this.state.pets[index].isAdopted = true;
    
    console.log(this.state.pets.isAdopted)
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
              <Filters  onChangeType = {this.changeType} onFindPetsClick = {this.fetchAll}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets = {this.state.pets} onAdoptPet = {this.isAdopted} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

App.defaultProps = {
  URL: '/api/pets'
}

export default App

