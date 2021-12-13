import React from 'react';
import { View, Text} from 'react-native';

import QuizCard from '../components/quiz-card';
import PointsFooter from '../components/points-footer';

const Menu = (props: any) => {
  function nav() {
    props.navigation.navigate({ name: 'Quiz' });
  }

  function navPoints() {
    props.navigation.navigate({ name: 'Points' });
  }

  return (
    <View>
      <QuizCard
        title={'Quiz - pytania z róznych dziedzin'}
        content={
          'Jest to quiz najlepszy na świecie, po prostu musisz w niego zagrać!'
        }
        number={'#1'}
        navigate={nav}
      />
      <PointsFooter navPoints={navPoints} />
      
    </View>
  );
};

export default Menu;
