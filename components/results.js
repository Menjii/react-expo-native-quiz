import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

const Results = (props: any) => {
  return <Text style={props.textStyle}>{props.points} points</Text>;
};

export default Results;
