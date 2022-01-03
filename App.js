import React, {Component, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { setJSExceptionHandler, setNativeExceptionHandler } from 'react-native-exception-handler';
import NetInfo from "@react-native-community/netinfo";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from "react-native/Libraries/Components/ToastAndroid/ToastAndroid";

import QuizComponent from './components/screens/quiz-component';
import Menu from './components/screens/menu';
import Points from './components/screens/points';
import Intro from './components/screens/intro';
import Statute from './components/screens/statute';
import QuizService from './components/quizService';


const handleError = (error, isFatal) => {
  console.log(error, isFatal);
  alert(error.name);
}

function Root() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Menu" component={Menu} />
      <Drawer.Screen name="Points" component={Points} />
      <Drawer.Screen name="Statute" component={Statute} />
      <Drawer.Screen name="Intro" component={Intro} />
    </Drawer.Navigator>
  );
}

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

setJSExceptionHandler((error, isFatal) => {
  handleError(error, isFatal);
}, true);

const getInitialPage = async () => {
  const showTerms = await AsyncStorage.getItem('statute');
  if (showTerms) return 'statute';
  return 'Intro';
}

export default class App extends Component<{}> {

  NetInfoSubscribtion = null;

  constructor(props) {
    super(props);
    this.state = {
      connection_status: false,
    }
  }

  fetchAllDatabase = async () => {
    const tests = await QuizService.getAllTests();
    let testsDetails = {};
    for(let i = 0; i < tests.length; i++ ) {
        testsDetails[tests[i].id] = await QuizService.getTestDetails(tests[i].id);
    }

    await AsyncStorage.setItem('storage-tests', JSON.stringify(tests));
    await AsyncStorage.setItem('storage-tests-details', JSON.stringify(testsDetails));
}

 setUpInitial = () => {
  const unsubscribe = NetInfo.addEventListener(state => {
      if( state.isConnected !== isConnectedToNetwork ) {
          setIsConnectedToNetwork(state.isConnected);
          if( !state.isConnected ) {
              Toast.show('No network connection', 1000);
          } else {
              Toast.show('Connected to network', 1000);
          }
      }
  });
}

  componentDidMount() {
    this.fetchAllDatabase
    this.setUpInitial
  };

  render() {
    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName={getInitialPage}>
            <Stack.Screen 
            name = "Root"
            component={Root}
            options={{headerShown: false}}
            />
            <Stack.Screen name="Intro" component={Intro} />
            <Stack.Screen name="Menu" component={Menu} />
            <Stack.Screen name="Quiz" component={QuizComponent} />
            <Stack.Screen name="Points" component={Points} />
            <Stack.Screen name="Statute" component={Statute} />
          </Stack.Navigator>
        </NavigationContainer>
    );
  }
}
