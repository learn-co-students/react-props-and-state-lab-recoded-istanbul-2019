import React from 'react'

class Filters extends React.Component {
  handleChangeMenuChoice = (event) => { // event comes from onChange event handler in <select>
    this.props.onChangeType(event.target.value); // event.target is the <select> element that triggered the event. The value of the value property of this root <select> tag is the selected menu <option>
  }
  render() {
    return (
      <div className="ui form">
      <h3>Animal type</h3>
      <div className="field">
        <select name="type" id="type" value={this.props.filterApplied} onChange={this.handleChangeMenuChoice}>
          <option value="all">All</option>
          <option value="cat">Cats</option>
          <option value="dog">Dogs</option>
          <option value="micropig">Micropigs</option>
        </select>
      </div>

      <div className="field">
        <button className="ui secondary button" onClick={this.props.onFindPetsClick}>Find pets</button>
      </div>
    </div>
    )
  }
}

export default Filters