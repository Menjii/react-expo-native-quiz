import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, Pressable } from 'react-native';
import questions from '../questions.json';
import Question from './question';
import Answers from './answers';
import Results from './results';
import Actions from './actions';
import PopUp from './pop-up';
import EStyleSheet from 'react-native-extended-stylesheet';
import Modal from 'react-native-modal';

const QuizComponent = (props: any) => {
  const [currentIndex, setIndex] = useState(0);
  const [currentQuestion, setQuestion] = useState(questions[currentIndex]);
  const [currentPoints, setPoints] = useState(0);
  const [allowToChoose, changePermission] = useState(true);
  const [markedAnswer, markAnswer] = useState({
    key: -1,
    variant: styles.success,
  });
  const [quizType, setQuizType] = useState('quiz');
  const [currentDate, setCurrentDate] = useState('1999-10-26')
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const handleModal = () => {
    setIsModalVisible(() => !isModalVisible)
    };
  
  const goToName = () => {
    handleModal();
    props.navigation.navigate({ name: 'Points' });
  }

  const handleNextQuestion = () => {
    const nextValue = currentIndex + 1;

    if (nextValue > questions.length - 1) {
      setIndex(questions.length - 1);
      handleModal();
      return;
    }
    setIndex(nextValue);
    setQuestion(questions[nextValue]);
    changePermission(true);
    markAnswer({ key: -1, variant: '' });
  };

  const handlePrevQuestion = () => {
    const prevValue = currentIndex - 1;
    if (prevValue < 0) {
      setIndex(0);
      return;
    }
    setIndex(prevValue);
    setQuestion(questions[prevValue]);
    changePermission(true);
    markAnswer({ key: -1, variant: '' });
  };

  const handleCheckAnswer = (chosenOption: string, key: number) => {
    if (!allowToChoose) {
      return;
    }
    if (currentQuestion.correct_answer === chosenOption) {
      const points = currentPoints + 1;
      setPoints(points);
      changePermission(false);
      markAnswer({ key, variant: styles.success });
    } else {
      changePermission(false);
      markAnswer({ key, variant: styles.wrong });
    }
  };

  return (
    <View>
      <Question
        currentQuestion={currentQuestion.question}
        currentIndex={currentIndex + 1}
        allQuestions={questions.length}
        textStyle={styles.text}></Question>
      <Answers
        checkAnswer={handleCheckAnswer}
        currentAnswers={currentQuestion.answers}
        markedAnswer={markedAnswer}
      />
      <Results points={currentPoints} textStyle={styles.text} />
      <Actions prev={handlePrevQuestion} next={handleNextQuestion} />

      <View style={styles.container}>
        <Modal isVisible={isModalVisible}>
          <View style={{ flex: 1 }}>
            <Text style={styles.title}>Na pewno chcesz ukonczyc quiz?</Text>
            <Pressable style={styles.popUpButton} onPress={handleModal}>
            <Text style={styles.text}>No</Text>
            </ Pressable>
            <Pressable style={styles.popUpButton} onPress={goToName}>
            <Text style={styles.text}>Yes</Text>
            </ Pressable>
          </View>
        </Modal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: 'black',
    margin: 5,
  },

  success: {
    padding: 10,
    marginTop: 3,
    backgroundColor: '#54F59C',
    alignItems: 'center',
  },

  wrong: {
    padding: 10,
    marginTop: 3,
    backgroundColor: '#FA6A4E',
    alignItems: 'center',
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  },
  popUpButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#72DD9F',
    margin: 5,
  }
});

export default QuizComponent;
