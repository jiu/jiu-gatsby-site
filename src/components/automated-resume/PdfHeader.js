import React from "react";
import { Link, Text, View } from "@react-pdf/renderer";
import styled from "@react-pdf/styled-components";

const Header = styled.View`
  padding: 20px;
  display: flex;
  flex-direction: row;
  font-size: 12px;
  justify-content: space-between;
  color: white;
  background-color: #eb219b;
`;
const Summary = styled.View`
  padding: 20px;
  font-size: 12px;
`;

const HeaderPDF = ({ data }) => {
  console.log("header", data);
  return (
    <>
      <Header>
        <View>
          <Text>{data.name}</Text>
          <Text>{data.label}</Text>
        </View>
        <View>
          <Link>{data.email}</Link>
          <Link>{data.phone}</Link>
          <Link>{data.website}</Link>
          <Text>
            {data.location.city} ({data.location.countryCode})
          </Text>
        </View>
      </Header>
      <Summary>
        <Text>{data.summary.en}</Text>
      </Summary>
    </>
  );
};

export default HeaderPDF;
