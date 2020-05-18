import React, { Component } from "react";
import Navigation from "./shared/components/Navigation";
import Movie from "./movie/Movie";
import Diary from "./diary/Diary";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const API_KEY = "k_92BxqCro";
const DUMMY = [
  {
    id: 1,
    fullTitle: "batman",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.8CH926UPpZAdx-fpyDdBMAHaDt%26pid%3DApi&f=1",
    watched: false,
    note: "happy netflix",
  },
  {
    id: 2,
    fullTitle: "joker",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.kNEgLoeYdqvXWKIfAuAeIAHaD4%26pid%3DApi&f=1",
    watched: false,
    note: "happy netflix",
  },
];
class App extends Component {
  state = {
    defaultMovies: [],
    searchedMovies: [],
    favMovies: [],
    movieSearched: "",
    tag: "Top250Movies",
  };

  handleChange = (e) => {
    this.setState({ movieSearched: e.target.value });
  };

  handleSearchButton = () => {
    const searchUrl = `https://imdb-api.com/en/API/SearchMovie/${API_KEY}/${this.state.movieSearched}`;
    fetch(searchUrl)
      .then((result) => result.json())
      .then((data) => this.setState({ searchedMovies: [...data.results] }))
      .catch((err) => console.log(err));
  };

  handleTabClick = (movie, index) => {
    const tempState = this.state.favMovies;
    tempState[index].watched = !movie.watched;
    this.setState({ favMovies: tempState });
  };

  handleHeartButton = (id, title, image) => {
    const tempState = this.state.favMovies;
    if (tempState.length === 0) {
      const favMovie = {
        id,
        title,
        image,
        watched: false,
        note: "happy netflixs",
      };
      this.setState({ favMovies: [...tempState, favMovie] });
    } else {
      tempState.forEach((movie, index) => {
        if (movie.id === id) {
          console.log("found");
          tempState.splice(index, 1);
          this.setState({ favMovies: [...tempState] });
        } else {
          console.log("not found");
          const favMovie = {
            id,
            title,
            image,
            watched: false,
            note: "happy netflix",
          };
          this.setState({ favMovies: [...tempState, favMovie] });
        }
      });
    }
  };

  handleDeleteButton = (index) => {
    const tempState = this.state.favMovies;
    tempState.splice(index, 1);
    this.setState({ favMovies: [...tempState] });
  };

  handleTagClick = (event) => {
    console.log(event.target.title, "hello");

    this.setState({ tag: event.target.title });
  };

  handleNoteSave = (index, newNote) => {
    console.log(index, newNote);
    const tempState = this.state.favMovies;
    tempState[index].note = newNote;
    this.setState({ favMovies: [...tempState] });
  };

  componentDidUpdate() {
    fetch(`https://imdb-api.com/en/API/${this.state.tag}/${API_KEY}`)
      .then((result) => result.json())
      .then((data) => this.setState({ defaultMovies: [...data.items] }))
      .catch((err) => console.log(err));
  }
  componentDidMount() {
    fetch(`https://imdb-api.com/en/API/${this.state.tag}/${API_KEY}`)
      .then((result) => result.json())
      .then((data) => this.setState({ defaultMovies: [...data.items] }))
      .catch((err) => console.log(err));
  }

  render() {
    console.log("App rendered");

    return (
      <div style={{ margin: "0px 300px" }}>
        <Router>
          <Navigation />
          <Switch>
            <Route path="/" exact>
              <Movie
                defaultMovies={this.state.defaultMovies}
                searchedMovies={this.state.searchedMovies}
                favMovies={this.state.favMovies}
                movieSearched={this.state.movieSearched}
                handleChange={this.handleChange}
                handleSearchButton={this.handleSearchButton}
                handleHeartButton={this.handleHeartButton}
                handleTagClick={this.handleTagClick}
              />
            </Route>
            <Route path="/diary">
              <Diary
                favMovies={this.state.favMovies}
                handleTabClick={this.handleTabClick}
                handleDeleteButton={this.handleDeleteButton}
                handleNoteSave={this.handleNoteSave}
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
