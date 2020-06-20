import React from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      filters: {
        type: "all",
      },
    };
  }

  changeType = (value) => {
    this.setState({
      filters: {
        type: value,
      },
    });
  };

  findPetsClick = () => {
    let query;
    if (this.state.filters.type === "all") {
      query = "";
    } else {
      query = `?type=${this.state.filters.type}`;
    }
    const url = `/api/pets${query}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          pets: data,
        });
      });
  };

  adoptPet = (id) => {
    const pet = this.state.pets.map((animal) => {
      return animal.id === id ? { ...animal, isAdopted: true } : p;
    });
    this.setState({
      pets: pet,
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
                onChangeType={this.changeType}
                onFindPetsClick={this.findPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.adoptPet} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
