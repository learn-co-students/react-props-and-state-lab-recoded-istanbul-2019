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
  onChangeType = (e) =>{
    this.setState ={
      filters:{
        type: e.target.value
      }
    }
  }
    onFindClick= () => {
      const type =this.state.filter.type 
      let URL = ''
      if (type === 'all'){
        URL += '/api/pets'
      }
      else {
        URL +=  '/api/pets?type=${type}'
      }
      fetch(URL)
      .then(res => res.json())
      .then(data => this.setState({
        pets : data
      }))
    }
    onAdobtPet = (id) => {
      const pets =this.state.petspets [pets.findIndex(e)=>
      e.id ===id)]isAdopted = true 
    }
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
              <Filters />
            </div>
            <div className="twelve wide column">
              <PetBrowser />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
