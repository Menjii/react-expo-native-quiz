import React from 'react';
import { Text } from 'react-native';

const TableRow = (props: any) => {
  return (
    <Text style={props.textStyle}
      onPress={() => props.checkAnswer(props.text, props.isCorrect, props.currentKey)}
      className={
        props.markedAnswer.key === props.currentKey
          ? props.markedAnswer.variant
          : ''
      }>
      {props.text}
    </Text>
  );
};

export default TableRow;
