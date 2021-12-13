import React from 'react';
import { Text, StyleSheet, View, Pressable } from 'react-native';

const Actions = (props: any) => {
  return (
    <View>
      <Pressable style={styles.buttonPrev} onPress={props.prev}>
        <Text style={styles.text}>prev</Text>
      </Pressable>
      <Pressable style={styles.buttonNext} onPress={props.next}>
        <Text style={styles.text}>next</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonNext: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'green',
    margin: 5,
  },

  buttonPrev: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'orange',
    margin: 5,
  },

  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default Actions;
