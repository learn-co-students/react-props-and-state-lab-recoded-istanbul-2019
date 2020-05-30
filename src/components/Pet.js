import React from 'react'

class Pet extends React.Component {
  render() {
    const { pet: { name, gender, age, weight, type, isAdopted, id }, onAdoptPet } = this.props
    const handleAdoptation = () => onAdoptPet(id)
    return (
      <div className="card" petid={id}>
        <div className="content">
          <a className="header">
            {gender === 'male' ? '♂' : '♀'}
            {name}
          </a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
          {isAdopted === true ? (<button className="ui disabled button" >Already adopted</button>)
            : (<button className="ui primary button" onClick={handleAdoptation}>Adopt pet</button>)}
        </div>
      </div>
    )
  }
}

export default Pet
