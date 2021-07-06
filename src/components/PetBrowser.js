import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    console.log(this)
    const petsList = this.props.pets.map(pet => {
      return <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet} />
    })
    return <div className="ui cards">{petsList}</div>
  }
}

export default PetBrowser
