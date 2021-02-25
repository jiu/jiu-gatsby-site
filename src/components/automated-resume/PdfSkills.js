import React from "react";

import { Text, View } from "@react-pdf/renderer";
import styled from "@react-pdf/styled-components";

const Container = styled.View`
  padding: 20px;
  font-size: 12px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;
const Title = styled.Text`
  font-size: 16px;
  color: #eb219b;
  margin-bottom: 15px;
`;
const Subtitle = styled.Text`
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const ListView = styled.View``;

const ListItem = styled.View`
  display: block;
  margin-bottom: 20px;
  font-size: 10px;
`;

const BlockLeft = styled.View`
  width: 20%;
`;
const BlockRight = styled.View`
  width: 80%;
`;

// const GridView = styled.View`
//   display: flex;
//   flex-wrap: wrap;
//   flex-direction: row;
//   align-content: flex-start;
// `;

// const GridItem = styled.View`
//   width: 33, 33%;
//   margin-bottom: 20px;
//   font-size: 12px;
// `;

const Skills = ({ data, title }) => {
  console.log("skills", data);
  return (
    <Container>
      <BlockLeft>
        <Title>{title}</Title>
      </BlockLeft>
      <BlockRight>
        <ListView>
          {data.map((data, index) => {
            return (
              <ListItem key={index}>
                <Subtitle>{data.name}</Subtitle>
                {data.keywords.map((item, i) => (
                  <View>
                    <Text key={i}>- {item}</Text>
                  </View>
                ))}
              </ListItem>
            );
          })}
        </ListView>
      </BlockRight>
    </Container>
  );
};

export default Skills;
