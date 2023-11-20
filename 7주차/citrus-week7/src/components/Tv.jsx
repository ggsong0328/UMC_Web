import React from "react";
import { useNavigate } from "react-router-dom";

const IMG_BASE_URL = "https://www.themoviedb.org/t/p/w1280/";

export default function Movie(props) {
  return (
    <div className="movie-container">
      <img src={IMG_BASE_URL + props.poster_path} alt="티비포스터" />
      <div className="movie-info">
        <h4>{props.title}</h4>
        <span>{props.vote_average}</span>
      </div>
    </div>
  );
}
