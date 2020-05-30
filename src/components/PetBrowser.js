import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  render() {
    const { pets: allPets, onAdoptPet } = this.props;
    return (
      <div className="ui cards">
        {allPets.map((singlePet, index) => (<Pet pet={singlePet} key={index} onAdoptPet={onAdoptPet} />))}
      </div>)
  }
}

export default PetBrowser
