import React from 'react';
import { Text } from 'react-native';

const TableRow = (props: any) => {
  return (
    <Text style={props.textStyle}
      onClick={() => props.checkAnswer(props.text, props.currentKey)}
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
