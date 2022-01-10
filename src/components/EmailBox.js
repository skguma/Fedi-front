import React, { useState } from "react";
import styled, { css } from "styled-components";
import "../style/style.css";

const EmailBox = ({ changeState }) => {
  const [isActive, setActive] = useState(false);
  const [values, setValues] = useState({ email: "" });
  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ [name]: value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (isActive) {
      alert("이메일로 발송되었습니다.");

      // TODO: 서버로 이메일 전송하기
      // 부모의 centerReport를 false로 만들기
      changeState();
    } else {
      alert("이메일에 @를 포함해서 입력해주세요.");
    }
  };

  const checkValid = () => {
    values.email.includes("@") ? setActive(true) : setActive(false);
  };
  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <input
          value={values.email}
          name="email"
          onKeyUp={checkValid}
          onChange={handleChange}
        />
        <button
          className={isActive ? "activebtn" : "unactivebtn"}
          type="submit"
        >
          전송
        </button>
      </form>
    </Wrapper>
  );
};

export default EmailBox;

const Wrapper = styled.div``;
