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
    flexDirection: "row",
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

const Skills = () => (
  <View>
    <Text>Skills</Text>
    {JSONData.skills.map((data, index) => {
      return (
        <View>
          <Text>{data.name}</Text>

          {data.keywords.map((item, i) => (
            <View style={styles.item}>
              <Text style={styles.bulletPoint}>•</Text>
              <Text key={i} style={styles.itemContent}>
                {item}
              </Text>
            </View>
          ))}
        </View>
      );
    })}
  </View>
);

export default Skills;
