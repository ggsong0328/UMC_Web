import React from "react";
import PropTypes from "prop-types";

function Overview(props) {
  const { style } = props;

  const overviewStyle = {
    ...style,
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: "160px",
    height: "289px",
    margin: "10px",
    marginLeft: "10px",
  };

  return (
    <div className="overview" style={overviewStyle}>
      <div className="overview-content">
        <h4 className="title">{props.title}</h4>
        <p className="overivew">{props.overview}</p>
      </div>
    </div>
  );
}

Overview.propTypes = {
  style: PropTypes.object, // style 속성은 객체로 예상
  title: PropTypes.string.isRequired, // title 속성은 필수 문자열로 예상
  overview: PropTypes.string.isRequired, // overview 속성은 필수 문자열로 예상
};

export default Overview;
