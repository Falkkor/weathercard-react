import React from "react";
import styled from "@emotion/styled";

import Location from "./Location";
import Condition from "./Condition";
import Icon from "./Icon";

const WeatherCard = (props) => {
  const Card = styled.div`
    margin: 0 auto;
    background: linear-gradient(to bottom, rgba(200, 0, 0), pink);
    width: 200px;
    height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 15px;
  `;

  return (
    <Card>
      <Location />
      <Icon />
      <Condition />
    </Card>
  );
};

export default WeatherCard;