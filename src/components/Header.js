import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Header() {
  let navigate = useNavigate();

  return (
    <ContainerH>
      <TitleBorder>LIXCEL</TitleBorder>
    </ContainerH>
  );
}

let ContainerH = styled.div`
  width: 100%;
  height: 100px;
  padding-left: 40px;
  padding-top: 20px;
`;

let TitleBorder = styled.div`
  width: 120px;
  height: 50px;
  border: 3px solid black;
  font-family: "S-CoreDream-8Heavy";
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 0px 0px;
`;

export default Header;
