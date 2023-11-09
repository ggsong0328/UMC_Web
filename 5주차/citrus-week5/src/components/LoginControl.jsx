import React, { useState } from "react";

function LoginControl() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <div style={{ display: "flex" }}>
          <div>
            <button onClick={handleLogoutClick} style={{ borderRadius: "8px" }}>
              로그아웃
            </button>
          </div>
          <div style={{ color: "white", margin: "auto", paddingLeft: "16px" }}>
            환영합니다!
          </div>
        </div>
      ) : (
        <div style={{ display: "flex" }}>
          <div>
            <button onClick={handleLoginClick} style={{ borderRadius: "8px" }}>
              로그인
            </button>
          </div>
          <div style={{ color: "white", margin: "auto", paddingLeft: "16px" }}>
            로그인 해주세요!
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginControl;
