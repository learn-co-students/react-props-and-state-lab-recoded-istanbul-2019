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
  fetchInfo = async () => {
    let filter= this.state.filters.type;
    if(filter==="all"){
      filter = "";
    }
    else{
      filter = "?type="+filter;
    }
    let info = await fetch(`/api/pets${filter}`);
    this.setState({
      ...this.state,
      pets: await info.json()
    })

  }
  refreshPetsType = (filter) => {
    this.setState({
      ...this.state,
      filters:{
        type: filter
      }
    })

  }
  /* not sure whether it works or not but */
  findById = (element, id) => {
    return element.id===id;
  }
  adoptPet = (id) => {
    console.log(id)
    let petIndex = this.state.pets.findIndex((element) =>element.id===id);
    console.log(petIndex)
    this.state.pets[petIndex].isAdopted = true;
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
              <Filters onFindPetsClick={this.fetchInfo} onChangeType={this.refreshPetsType}/>
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
