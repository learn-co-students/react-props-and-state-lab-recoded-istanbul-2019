import React from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";
const data = "/api/pets";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      filters: {
        type: "all"
      }
    };
  }
  dataFilter = e => `?type=${e}`;

  handleFindPets = e => {
    let toFetch =
      this.state.filters.type === "all"
        ? data
        : data + this.dataFilter(this.state.filters.type);
    fetch(toFetch)
      .then(res => res.json())
      .then(pets => this.setState({ pets: pets }));
  };

  handleChangeType = e => {
    this.setState({
      filters: {
        type: e
      }
    });
  };
  handleOnAdoptPet = id => {
    const petArray = this.state.pets.map(pet => {
      if (pet.id === id) {
        pet.isAdopted = true;

        return pet;
      } else {
        return pet;
      }
    });

    this.setState({
      pets: petArray
    });
  };

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                onChangeType={this.handleChangeType}
                onFindPetsClick={this.handleFindPets}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                onAdoptPet={this.handleOnAdoptPet}
                pets={this.state.pets}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
