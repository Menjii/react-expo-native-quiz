import React, {Component, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { setJSExceptionHandler, setNativeExceptionHandler } from 'react-native-exception-handler';

import QuizComponent from './components/quiz-component';
import Menu from './screens/menu';
import Points from './screens/points';
import Intro from './screens/intro';
import Statute from './screens/statute';

import { createDrawerNavigator } from '@react-navigation/drawer';

const handleError = (error, isFatal) => {
  console.log(error, isFatal);
  alert(error.name);
}

const Drawer = createDrawerNavigator();

setJSExceptionHandler((error, isFatal) => {
  handleError(error, isFatal);
}, true);

export default class App extends Component<{}> {

  makeRequest = () => {
    fetch('asdf')
    .then((res) => res.json())
    .then(res=>{
      alert(res);
    })
    .catch(error => {
      handleError(error, false);
    });
  }

  render() {
    return (
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Statute">
            <Drawer.Screen name="Menu" component={Menu} />
            <Drawer.Screen name="Quiz" component={QuizComponent} />
            <Drawer.Screen name="Points" component={Points} />
            <Drawer.Screen name="Intro" component={Intro} />
            <Drawer.Screen name="Statute" component={Statute} />
          </Drawer.Navigator>
        </NavigationContainer>
    );
  }
}
