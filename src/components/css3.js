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
  height: 100%;
  width: 55%;
  background-color: #434f6d;
  border-radius: 10px;
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

export default function css3() {
  return (
    <Maincont>
      <ValueContainer>
        <Radio type="radio" value="display : flex;" name="displayFlex" />
        <Lable for="displayFlex">display : flex;</Lable>
        <Radio type="radio" value="display : flex;" name="displayFlex" />
        <Lable for="displayFlex">display : flex;</Lable>
        <Radio type="radio" value="display : flex;" name="displayFlex" />
        <Lable for="displayFlex">display : flex;</Lable>
      </ValueContainer>

      <OutputContainer></OutputContainer>
    </Maincont>
  );
}
