import React, { useEffect } from "react";
import { useState } from "react";
import "./style.css";

function Login() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [checkpw, setCheckpw] = useState("");

  const [err_id, setErr_id] = useState("");
  const [err_name, setErr_name] = useState("");
  const [err_email, setErr_email] = useState("");
  const [err_pw, setErr_pw] = useState("");
  const [err_checkpw, setErr_checkpw] = useState("");

  const [isId, setisId] = useState(false);
  const [isName, setisName] = useState(false);
  const [isEmail, setisEmail] = useState(false);
  const [isPw, setisPw] = useState(false);
  const [isCheckpw, setisCheckpw] = useState(false);

  const [buttonDisabled, setButtonDisabled] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const InputId = (e) => {
    const CurrentId = e.target.value;
    setId(CurrentId);
    if (CurrentId === "") {
      setErr_id("필수 입력 항목입니다!");
      setisId(false);
    } else {
      setErr_id("멋진 이름이네요!");
      setisId(true);
    }
  };

  const InputName = (e) => {
    const CurrentName = e.target.value;
    setName(CurrentName);
    if (CurrentName.length < 2 || CurrentName.length > 5) {
      setErr_name("닉네임은 2~5글자로 구성해주세요!");
      setisName(false);
    } else {
      setErr_name("멋진 닉네임이군요!");
      setisName(true);
    }
  };

  const InputEmail = (e) => {
    const CurrentEmail = e.target.value;
    setEmail(CurrentEmail);
    const CheckEmail =
      /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{3}$/;

    if (!CheckEmail.test(CurrentEmail)) {
      setErr_email("올바른 메일 형식이 아닙니다!");
      setisEmail(false);
    } else {
      setErr_email("올바른 메일 형식입니다!");
      setisEmail(true);
    }
  };

  const InputPw = (e) => {
    const CurrentPw = e.target.value;
    setPw(CurrentPw);
    const CheckPw = /^[A-Za-z0-9@#$%^&+=!]*$/;

    if (!CheckPw.test(CurrentPw)) {
      setErr_pw("영어+숫자+특수문자를 조합하여 작성해주세요.");
      setisPw(false);
    } else {
      setErr_pw("안전한 비밀번호입니다!");
      setisPw(true);
    }
  };

  const InputCheckPw = (e) => {
    const CheckCurrentPw = e.target.value;
    setCheckpw(CheckCurrentPw);
    if (pw !== CheckCurrentPw) {
      setErr_checkpw("비밀번호가 일치하지 않습니다.");
      setisCheckpw(false);
    } else {
      setErr_checkpw("비밀번호가 일치합니다.");
      setisCheckpw(true);
    }
  };

  useEffect(() => {
    setButtonDisabled(!isId || !isName || !isEmail || !isPw || !isCheckpw);
  }, [isId, isName, isEmail, isPw, isCheckpw]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="login-wrapper">
        <div className="login">
          <h1>회원 가입</h1>
          <hr />
          <form id="login-form">
            <div>
              <label className="Legend">이름</label>
              <input
                type="id"
                className="input"
                id="id"
                value={id}
                onChange={InputId}
              />
              <p className="err" style={{ color: !isId ? "red" : "green" }}>
                {err_id}
              </p>
            </div>
            <div>
              <label className="Legend">닉네임</label>
              <input
                type="text"
                className="input"
                id="name"
                value={name}
                onChange={InputName}
              />
              <p className="err" style={{ color: !isName ? "red" : "green" }}>
                {err_name}
              </p>
            </div>
            <div>
              <label className="Legend">이메일</label>
              <input
                type="email"
                className="input"
                id="email"
                value={email}
                onChange={InputEmail}
              />
              <p className="err" style={{ color: !isEmail ? "red" : "green" }}>
                {err_email}
              </p>
            </div>
            <div>
              <label className="Legend">비밀번호</label>
              <input
                type="password"
                className="input"
                id="pw"
                value={pw}
                onChange={InputPw}
              />
              <p className="err" style={{ color: !isPw ? "red" : "green" }}>
                {err_pw}
              </p>
            </div>
            <div>
              <label className="Legend">비밀번호 확인</label>
              <input
                type="password"
                className="input"
                id="checkpw"
                value={checkpw}
                onChange={InputCheckPw}
              />
              <p
                className="err"
                style={{ color: !isCheckpw ? "red" : "green" }}
              >
                {err_checkpw}
              </p>
            </div>
            <button
              type="button"
              id="btn"
              disabled={buttonDisabled}
              onClick={openModal}
            >
              가입하기
            </button>
            {isModalOpen && (
              <div className="login-success">
                <div className="modal">
                  <h2 className="title">가입 성공!</h2>
                  <p>umc 챌린저 가입을 축하합니다!!!</p>
                  <button id="cbtn" onClick={closeModal}>
                    닫기
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
