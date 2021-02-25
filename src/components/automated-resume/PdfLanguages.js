import React from "react";

import { Text } from "@react-pdf/renderer";
import styled from "@react-pdf/styled-components";

const Container = styled.View`
  padding: 20px;
  font-size: 12px;
`;
const Title = styled.Text`
  font-size: 16px;
  color: #00d1b2;
`;
const Subtitle = styled.Text`
  font-size: 14px;
  font-weight: bold;
  text-decoration: underline;
`;

const ListView = styled.View``;

const ListItem = styled.View`
  display: block;
  margin-bottom: 20px;
`;

export default ({ data, title }) => {
  console.log("languages", data);
  return (
    <Container>
      <Title>{title}</Title>

      {data.map((data, index) => {
        return (
          <ListView key={index}>
            <ListItem>
              <Subtitle>{data.name}</Subtitle>

              <Text>{data.fluency}</Text>
            </ListItem>
          </ListView>
        );
      })}
    </Container>
  );
};
