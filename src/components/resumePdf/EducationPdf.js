import React from "react";

import { Text, View, StyleSheet } from "@react-pdf/renderer";
import JSONData from "../../../content/cv-fr-julie-dubois.json";

const styles = StyleSheet.create({
  title: {
    fontSize: 11,
    marginBottom: 10,
  },
  skills: {
    fontSize: 10,
    marginBottom: 10,
  },
  item: {
    flexDirection: "column",
    marginBottom: 5,
  },
  bulletPoint: {
    width: 10,
    fontSize: 10,
  },
  itemContent: {
    flex: 1,
    fontSize: 10,
  },
});

export default () => (
  <View style={styles.container}>
    <Text>Education</Text>

    {JSONData.education.map((data, index) => {
      return (
        <View>
          <View style={styles.item}>
            <Text style={styles.itemContent}>
              {data.area} ({data.institution})
            </Text>
            <Text style={styles.itemContent}>
              {data.startDate} -> {data.endDate}
            </Text>
            <Text style={styles.itemContent}>{data.summary}</Text>
            <Text style={styles.itemContent}>{data.studyType}</Text>
          </View>
        </View>
      );
    })}
  </View>
);
