import React, {Component, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { setJSExceptionHandler, setNativeExceptionHandler } from 'react-native-exception-handler';
import NetInfo from "@react-native-community/netinfo";

import QuizComponent from './components/screens/quiz-component';
import Menu from './components/screens/menu';
import Points from './components/screens/points';
import Intro from './components/screens/intro';
import Statute from './components/screens/statute';


const handleError = (error, isFatal) => {
  console.log(error, isFatal);
  alert(error.name);
}

function Root() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Menu" component={Menu} />
      <Drawer.Screen name="Points" component={Points} />
    </Drawer.Navigator>
  );
}

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

setJSExceptionHandler((error, isFatal) => {
  handleError(error, isFatal);
}, true);

export default class App extends Component<{}> {

  NetInfoSubscribtion = null;

  constructor(props) {
    super(props);
    this.state = {
      connection_status: false,
    }
  }

  useEffect(() => {
    this.NetInfoSubscribtion = NetInfo.addEventListener(
      this._handleConnectivityChange,
    );
  });

  _handleConnectivityChange = (state) => {
    this.setState({ connection_status: state.isConnected })
  }

  render() {
    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Statute">
            <Stack.Screen
            name = "Root"
            component={Root}
            options={{headerShown: false}}
            />
            <Stack.Screen name="Menu" component={Menu} />
            <Stack.Screen name="Quiz" component={QuizComponent} />
            <Stack.Screen name="Points" component={Points} />
            <Stack.Screen name="Intro" component={Intro} />
            <Stack.Screen name="Statute" component={Statute} />
          </Stack.Navigator>
        </NavigationContainer>
    );
  }
}
