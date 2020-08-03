import React, { Component } from "react";
import unsplash from "../api/unsplash";

import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get(
      "https://api.unsplash.com/search/photos",
      {
        params: {
          query: term,
        },
      }
    );

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div style={{ marginTop: "10px" }} className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
