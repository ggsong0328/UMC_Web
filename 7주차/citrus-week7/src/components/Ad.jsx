import React from "react";

const Ad = ({ showAd }) => {
  if (!showAd) {
    return null;
  }

  return (
    <div className="image-container">
      <img src="/img/Untitled.svg" alt="Ad Banner" />
    </div>
  );
};

export default Ad;
