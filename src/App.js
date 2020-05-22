import React, { useReducer, useEffect } from "react";
import Navigation from "./shared/components/Navigation";
import Movie from "./movie/Movie";
import Diary from "./diary/Diary";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { ACTIONS } from "./shared/utils/Actions";

const API_KEY = "k_92BxqCro";

// const DUMMY = [
//   {
//     id: 1,
//     fullTitle: "batman",
//     image:
//       "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.8CH926UPpZAdx-fpyDdBMAHaDt%26pid%3DApi&f=1",
//     watched: false,
//     note: "happy netflix",
//   },
//   {
//     id: 2,
//     fullTitle: "joker",
//     image:
//       "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.kNEgLoeYdqvXWKIfAuAeIAHaD4%26pid%3DApi&f=1",
//     watched: false,
//     note: "happy netflix",
//   },
//   {
//     id: 3,
//     fullTitle: "joker",
//     image:
//       "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.kNEgLoeYdqvXWKIfAuAeIAHaD4%26pid%3DApi&f=1",
//     watched: false,
//     note: "happy netflix",
//   },
// ];

//Reducer function for Changing State

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SEARCH_CHANGE:
      return {
        ...state,
        movieSearched: action.payload,
      };
    case ACTIONS.SAVE_MOVIE:
      return {
        ...state,
        defaultMovies: action.payload,
      };
    case ACTIONS.SEARCHED:
      return {
        ...state,
        searchedMovies: action.payload,
      };
    case ACTIONS.TOGGLE_TAB:
      return {
        ...state,
        favMovies: state.favMovies.map((movie, index) =>
          index === action.payload
            ? { ...movie, watched: !movie.watched }
            : movie
        ),
      };
    case ACTIONS.SAVE_NOTE:
      return {
        ...state,
        favMovies: state.favMovies.map((movie, index) =>
          index === action.payload.index
            ? { ...movie, note: action.payload.newNote }
            : movie
        ),
      };
    case ACTIONS.TAG_CLICKED:
      return { ...state, tag: action.payload };

    case ACTIONS.ADD_FAV_MOVIE:
      return {
        ...state,
        favMovies: [...state.favMovies, action.payload],
      };
    case ACTIONS.REMOVE_FAV_MOVIE:
      return {
        ...state,
        favMovies: action.payload,
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, {
    defaultMovies: [
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
      {
        id: 3,
        fullTitle: "lelouch ",
        image:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.kNEgLoeYdqvXWKIfAuAeIAHaD4%26pid%3DApi&f=1",
        watched: false,
        note: "happy netflix",
      },
    ],
    searchedMovies: [],
    favMovies: [],
    movieSearched: "",
    tag: "Top250Movies",
  });

  const handleChange = (e) => {
    dispatch({ type: ACTIONS.SEARCH_CHANGE, payload: e.target.value });
  };

  const handleSearchButton = () => {
    const searchUrl = `https://imdb-api.com/en/API/SearchMovie/${API_KEY}/${state.movieSearched}`;
    fetch(searchUrl)
      .then((result) => result.json())
      .then((data) =>
        dispatch({ type: ACTIONS.SEARCHED, payload: [...data.results] })
      )
      .catch((err) => console.log(err));
  };

  const handleTabClick = (index) => {
    dispatch({ type: ACTIONS.TOGGLE_TAB, payload: index });
  };

  const handleHeartButton = (id, title, image) => {
    const tempState = [...state.favMovies];

    if (tempState.length === 0) {
      const favMovie = {
        id,
        title,
        image,
        watched: false,
        note: "happy netflixs",
      };

      dispatch({ type: ACTIONS.ADD_FAV_MOVIE, payload: favMovie });
    } else {
      let isFound = false;
      state.favMovies.forEach((movie, index) => {
        console.log(movie.id === id, index);
        if (movie.id === id) {
          isFound = index;
        }
      });
      if (isFound !== false) {
        console.log("say hello", isFound);
        const tempState = [...state.favMovies];
        tempState.splice(isFound, 1);
        dispatch({ type: ACTIONS.REMOVE_FAV_MOVIE, payload: tempState });
      } else {
        console.log("hello from undefined");
        const favMovie = {
          id,
          title,
          image,
          watched: false,
          note: "happy netflixs",
        };

        dispatch({ type: ACTIONS.ADD_FAV_MOVIE, payload: favMovie });
      }
    }
  };

  const handleDeleteButton = (index) => {
    const tempState = [...state.favMovies];
    tempState.splice(index, 1);
    dispatch({ type: ACTIONS.REMOVE_FAV_MOVIE, payload: tempState });
  };

  const handleTagClick = (event) => {
    dispatch({ type: ACTIONS.TAG_CLICKED, payload: event.target.title });
  };

  const handleNoteSave = (index, newNote) => {
    dispatch({ type: ACTIONS.SAVE_NOTE, payload: { index, newNote } });
  };

  useEffect(() => {
    fetch(`https://imdb-api.com/en/API/${state.tag}/${API_KEY}`)
      .then((result) => result.json())
      .then((data) =>
        dispatch({ type: ACTIONS.SAVE_MOVIE, payload: [...data.items] })
      )
      .catch((err) => console.log(err));
  }, [state.tag]);

  // useEffect(() => {
  //   fetch(`https://imdb-api.com/en/API/${state.tag}/${API_KEY}`)
  //     .then((result) => result.json())
  //     .then((data) =>
  //       dispatch({ type: ACTIONS.SAVE_MOVIE, payload: [...data.items] })
  //     )
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <div style={{ margin: "0px 300px" }}>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact>
            <Movie
              defaultMovies={state.defaultMovies}
              searchedMovies={state.searchedMovies}
              favMovies={state.favMovies}
              movieSearched={state.movieSearched}
              handleChange={handleChange}
              handleSearchButton={handleSearchButton}
              handleHeartButton={handleHeartButton}
              handleTagClick={handleTagClick}
            />
          </Route>
          <Route path="/diary">
            <Diary
              favMovies={state.favMovies}
              handleTabClick={handleTabClick}
              handleDeleteButton={handleDeleteButton}
              handleNoteSave={handleNoteSave}
            />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
