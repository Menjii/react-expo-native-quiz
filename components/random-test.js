import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Pressable } from 'react-native';
import { Card } from 'react-native-paper';
import QuizService from './quizService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import _ from 'lodash';


const RandomTest = (props: any) => {

  const [quizData, changeData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
        const result = await QuizService.getAllTests();
        changeData(_.shuffle(result));
    } catch(error) {
        console.error(error);
        const cachedResult = JSON.parse(await AsyncStorage.getItem('storage-tests'));
        changeData(_.shuffle(cachedResult));
    }
}

  const randomQuiz = () => { 
      const randomInt = Math.floor(Math.random() * quizData.length);
      const result = quizData[randomInt].id;
      console.log(result);
      return result;
    };
  
  return (
    <SafeAreaView style={styles.container}>
        <Card>
          <Text style={styles.paragraph}>Random Quiz</Text>
          <Pressable style={styles.button} onPress={() => props.nav.navigate(('Quiz'), {id: randomQuiz()})}>
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

export default RandomTest;
