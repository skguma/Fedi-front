import React, { useState } from "react";
import styled, { css } from "styled-components";

const EmailBox = ({ changeState }) => {
  const [values, setValues] = useState({ email: "" });
  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ [name]: value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    alert("이메일로 발송되었습니다.");

    // TODO: 서버로 이메일 전송하기
    // 부모의 centerReport를 false로 만들기
    changeState();
  };
  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <input value={values.email} name="email" onChange={handleChange} />
        <button type="submit">전송</button>
      </form>
    </Wrapper>
  );
};

export default EmailBox;

const Wrapper = styled.div``;
