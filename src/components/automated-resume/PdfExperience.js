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

const Small = styled.Text`
  font-size: 10px;
  margin: 5px 0;
`;

export default ({ data, translation }) => {
  console.log("exp", data, translation);
  return (
    <Container>
      <BlockLeft>
        <Title>{translation.cvExperiences.en}</Title>
      </BlockLeft>
      <BlockRight>
        {data.map((data, index) => {
          return (
            <ListView key={index}>
              <ListItem wrap="true">
                <Subtitle>
                  {data.position.en} {data.company} ({data.location.en})
                </Subtitle>
                <Small>
                  {data.startDate} - {data.endDate}
                </Small>
                {/* <Text>{data.summary.en}</Text> */}

                {data.highlights.en.map((item, i) => (
                  <View>
                    <Text key={i}>{item}</Text>
                  </View>
                ))}
                <Small></Small>
                <Text>
                  {translation.cvAchievements.en} : {data.achievements.en}
                </Text>
                <Small></Small>
                <Text>
                  {" "}
                  {translation.cvSkillsUsed.en} : {data.skills}
                </Text>

                <Small>
                  {translation.cvSecteur.en} : {data.domain.en}
                  {translation.cvTeam.en} : {data.team}{" "}
                  {translation.cvPeople.en}
                </Small>
              </ListItem>
            </ListView>
          );
        })}
      </BlockRight>
    </Container>
  );
};
