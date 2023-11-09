import React, { Component } from "react";
import Ad from "./Ad";

class AdPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAd: true, // 초기에 광고 표시 여부를 true로 설정
    };
  }

  // 버튼을 클릭했을 때 광고 표시 여부를 토글하는 메서드
  handleToggleClick = () => {
    this.setState((prevState) => ({
      showAd: !prevState.showAd,
    }));
  };

  render() {
    return (
      <div>
        <Ad showAd={this.state.showAd} />
        <button onClick={this.handleToggleClick}>
          {this.state.showAd ? "광고 숨기기" : "광고 보기"}
        </button>
      </div>
    );
  }
}

export default AdPage;
