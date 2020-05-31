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
  onChangeType = (e) => {
    this.setState(
      {
        filters: { ...this.state.filters.type, type: e.target.value },
      },
      () => console.log(this.state.filters.type)
    );
  };
  onFindPetsClick = async () => {
    let url;
    if (this.state.filters.type === "all") {
      url = "/api/pets";
    } else {
      url = `/api/pets?type=${this.state.filters.type}`;
    }
    let res = await fetch(url);
    let data = await res.json();
    this.setState(
      {
        pets: data,
      },
      () => console.log(this.state.pets)
    );
  };
  onAdoptPet = (id) => {
   
    let pets = this.state.pets.map((pet) => {
      if (pet.id === id) {
        return { ...pet, isAdopted: true };
      } else {
        return pet;
      }
    });
    this.setState({
      pets: pets,
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
                onChangeType={this.onChangeType}
                onFindPetsClick={this.onFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;