import React from "react";
import styled from "@emotion/styled";

const Icon = (props) => {
  const Icon = styled.img`
    width: 40%;
  `;

  return (
    <Icon className="icon" src="./img/weather-clouds.png" alt="cloudy"></Icon>
  );
};

export default Icon;
