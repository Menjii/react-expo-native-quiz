import React, { useEffect, useState } from 'react';
import { View, Text} from 'react-native';

import QuizCard from '../quiz-card';
import PointsFooter from '../points-footer';
import RandomTest from '../random-test';
import { ScrollView } from 'react-native-gesture-handler';
import _ from 'lodash';

const Menu = ({navigation}) => {

  const [quizes, changeQuizes] = useState([]);

  useEffect(() => {
    fetch('http://tgryl.pl/quiz/tests')
      .then(response => response.json())
      .then(data => changeQuizes(_.shuffle(data)))
      .catch(error => {
        console.error(error);
      });
  }, []);

  const quizesView = quizes.map((quiz, key: number) => {
    return (
        <QuizCard
          key = { key }
          nav = { navigation }
          id = { quiz.id }
          title={quiz.name}
          content={quiz.description}
          number={ quiz.id }
        />
      );
    });

    return (
      <ScrollView>
        <View>
          
          {quizesView}

          <PointsFooter
          nav = { navigation }
          />

          <RandomTest 
          nav = { navigation }
          />
          
        </View>
      </ScrollView>
  );
};

export default Menu;
