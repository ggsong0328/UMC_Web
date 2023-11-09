import React, { useState } from "react";
import PropTypes from "prop-types";
import Overview from "./Overview";
import {
  Wrap_Movie,
  Image,
  Info,
  Title,
  Vote,
  Warp_Overview,
} from "./Movie.style";

function Movie({ movieData }) {
  const [showOverview, setShowOverview] = useState(false);

  const handleMouseEnter = () => {
    setShowOverview(true);
  };
  const handleMouseLeave = () => {
    setShowOverview(false);
  };

  const overviewStyle = {
    position: "absolute",
    top: 0,
    left: 10,
    width: "180",
    height: "254",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    color: "white",
    display: showOverview ? "block" : "none",
    fontSize: 10,
    padding: 10,
  };

  return (
    <Wrap_Movie
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ position: "relative" }}
    >
      <Image>
        <img src={movieData.poster_path} style={{ width: 180, height: 254 }} />
      </Image>
      <Info>
        <Title>{movieData.title}</Title>
        <Vote>{movieData.vote_average}</Vote>
      </Info>
      <Warp_Overview>
        {showOverview && (
          <Overview
            title={movieData.title}
            overview={movieData.overview}
            style={overviewStyle}
          />
        )}
      </Warp_Overview>
    </Wrap_Movie>
  );
}

Movie.propTypes = {
  movieData: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
  }).isRequired, // 필수 속성으로 지정
};

export default Movie;
