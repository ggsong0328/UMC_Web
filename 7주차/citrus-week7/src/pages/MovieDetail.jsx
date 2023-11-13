import React from "react";
import { useLocation, useParams } from "react-router-dom";

export default function MovieDetail() {
  const { title } = useParams();
  const { state } = useLocation();

  return (
    <div className="page-container">
      <div style={{ display: "flex" }}>
        <img
          style={{ width: "300px", height: "450px" }}
          src={state.poster_path}
          alt="영화포스터 이미지"
        />
        <div>
          <div style={{ fontSize: "32px" }}>{title}</div>
        </div>
      </div>
    </div>
  );
}
