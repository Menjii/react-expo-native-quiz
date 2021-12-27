import React, { useEffect, useState } from 'react';
import { View, Text} from 'react-native';

import QuizCard from '../quiz-card';
import PointsFooter from '../points-footer';

const Menu = ({navigation}) => {

  const [quizes, changeQuizes] = useState([]);

  useEffect(() => {
    fetch('http://tgryl.pl/quiz/tests')
      .then(response => response.json())
      .then(data => changeQuizes(data))
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
    <View>
      
      {quizesView}

      <PointsFooter
      nav = { navigation }
       />
      
    </View>
  );
};

export default Menu;
