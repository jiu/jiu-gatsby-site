import React from 'react';

import { Link, Text, View, StyleSheet } from '@react-pdf/renderer';
import JSONData from "../../../content/cv-fr-julie-dubois.json"

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: '#112131',
    borderBottomStyle: 'solid',
    alignItems: 'stretch',
  },
  detailColumn: {
    flexDirection: 'column',
    flexGrow: 9,
    textTransform: 'uppercase',
  },
  linkColumn: {
    flexDirection: 'column',
    flexGrow: 2,
    alignSelf: 'flex-end',
    justifySelf: 'flex-end',
  },
  name: {
    fontSize: 24,

  },
  subtitle: {
    fontSize: 10,
    justifySelf: 'flex-end',

  },
  link: {

    fontSize: 10,
    color: 'black',
    textDecoration: 'none',
    alignSelf: 'flex-end',
    justifySelf: 'flex-end',
  },
});

export default () => (
  <View style={styles.container}>
    <View style={styles.detailColumn}>
      <Text style={styles.name}>{JSONData.basics.name}</Text>
      <Text style={styles.subtitle}>{JSONData.basics.label}</Text>
    </View>
    <View style={styles.linkColumn}>
      <Link style={styles.link}>{JSONData.basics.email}</Link>
      <Link>{JSONData.basics.phone}</Link>
      <Link>{JSONData.basics.location.city} ({JSONData.basics.location.countryCode})</Link>
    </View>
  </View>
);
