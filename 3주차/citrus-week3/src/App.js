import React from "react";
import movies from "./movieDummy";
import Movie from "./Components/Movie";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #22254B;
  }

`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <div className="app-container">
        {movies.results.map((item) => (
          <Movie key={item.id} movieData={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
