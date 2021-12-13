import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Pressable } from 'react-native';
import { Card } from 'react-native-paper';

const PointsFooter = (props: any) => {
  return (
    <SafeAreaView style={styles.container}>
        <Card>
          <Text style={styles.paragraph}>Get to know your ranking result</Text>
          <Pressable style={styles.button} onPress={props.navPoints}>
            <Text style={styles.text}>Check!</Text>
          </Pressable>
        </Card>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20,
  },
  text: {
    fontSize: 15,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: 'black',
    margin: 5,
    textAlign: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#D4E0D9',
    margin: 5,
  },
});

export default PointsFooter;
