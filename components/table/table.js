import React from 'react';
import TableRow from './table-row';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

const Table = (props: any) => {
  return (
    <View>
      {props.answers && props.answers.map((elem: string, key: number) => {
        return (
          <TouchableOpacity key={key} style={styles.container}>
            <TableRow
              checkAnswer={props.checkAnswer}
              text={elem.content}
              isCorrect={elem.isCorrect}
              currentKey={elem}
              textStyle={styles.text}
              markedAnswer={props.markedAnswer}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 3,
    backgroundColor: '#D4E0D9',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    //fontFamily: 'Lato-Italic'
  },
});

export default Table;
