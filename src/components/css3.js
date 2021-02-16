import React from "react";

import styled from "styled-components";

const Maincont = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 85vh;
  padding: 20px 50px;
`;

const ValueContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 55%;
  background-color: #434f6d;
  border-radius: 10px;

  h1 {
  }
`;
const OutputContainer = styled.div`
  height: 100%;
  width: 40%;
  margin-left: auto;
  background-color: #434f6d;
  border-radius: 10px;
`;

const Radio = styled.input`
  color: #fff;
`;

const Lable = styled.label`
  color: #fff;
`;

const RadioContainer = styled.div`
  display: flex;

  justify-content: space-around;
  align-content: center;
  align-items: center;
`;

export default function css3() {
  return (
    <Maincont>
      <ValueContainer>
        <RadioContainer>
          <Radio type="radio" value="display : flex;" name="displayFlex" />
          <Lable for="displayFlex">display : flex;</Lable>
        </RadioContainer>
      </ValueContainer>

      <OutputContainer></OutputContainer>
    </Maincont>
  );
}
