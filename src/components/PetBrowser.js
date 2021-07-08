import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    return (
      <div className="ui cards">
        {this.props.pets.map(p =>
          <Pet pet={p} onAdoptPet={this.props.onAdoptPet} key={p.id} />
        )}
      </div>
    );
  }
}

export default PetBrowser
