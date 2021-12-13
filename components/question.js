import React from 'react';
import { View, Text } from 'react-native';

const Question = (props: any) => {
  return (
    <View>
      <Text style={props.textStyle}>
        {' '}
        Question: {props.currentIndex}/{props.allQuestions}
      </Text>
      <Text style={props.textStyle}> {props.currentQuestion} </Text>
    </View>
  );
};

export default Question;
