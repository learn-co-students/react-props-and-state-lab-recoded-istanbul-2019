import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    const petCards = this.props.pets.map((petObject) => 
    <Pet key={petObject.id} pet={petObject} onAdoptPet={this.props.onAdoptPet} />
  );
  return <div className="ui cards">{petCards}</div>;
  }
}

export default PetBrowser