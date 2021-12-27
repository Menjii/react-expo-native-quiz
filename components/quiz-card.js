import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

const QuizCard = (props: any) => {
  
  return (
    <TouchableOpacity style={styles.container} onPress={() => props.nav.navigate(('Quiz'), {id: props.id})} >
          <Card>
            <Text style={styles.paragraph}>
              {props.title}
            </Text>
            <Text style={styles.text}>{props.content}</Text>
          </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20
  },
  text: {
    fontSize: 15,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: 'black',
    margin: 5,
    textAlign: 'center'
  },
});

export default QuizCard;
