import React from "react";

import { Text } from "@react-pdf/renderer";

import styled from "@react-pdf/styled-components";

const Container = styled.View`
  padding: 20px;
  font-size: 12px;
`;
const Title = styled.Text`
  font-size: 16px;
  color: #eb219b;
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

const Small = styled.Text`
  font-size: 10px;
`;

export default ({ data, title }) => {
  console.log("edu", data);
  return (
    <Container>
      <Title>{title}</Title>

      {data.map((data, index) => {
        return (
          <ListView key={index}>
            <ListItem>
              <Subtitle>
                {data.area} ({data.institution})
              </Subtitle>
              <Small>
                {data.startDate} - {data.endDate}
              </Small>
              <Text>{data.summary}</Text>
              <Small>{data.studyType}</Small>
            </ListItem>
          </ListView>
        );
      })}
    </Container>
  );
};
