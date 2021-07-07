import React from 'react'
import App from '/App.js'

class Filters extends React.Component {
  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange = {(event) => this.props.onChangeType(event.target.value)}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onCLick={this.props.onFindClick}>Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
