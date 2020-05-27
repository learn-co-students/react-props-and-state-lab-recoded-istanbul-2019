import React from 'react'

class Pet extends React.Component {
  renderGender = (props) => {
    if(props.gender==="male"){
      return(<span>♂</span>)
    }
    else if(props.gender==="female"){
      return(<span>♀</span>)
    }
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.renderGender(this.props.pet)}
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.pet.isAdopted?
            <button className="ui disabled button">Already adopted</button>:
            <button onClick={() => this.props.onAdoptPet(this.props.pet.id)} className="ui primary button">Adopt pet</button>}
        </div>
      </div>
    )
  }
}

export default Pet
