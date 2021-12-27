import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import RoundIconBtn from '../round-icon-btn';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import StatuteJson from '../../statute.json';

const Statute = (props: any) => {
  const [isReaded, setIsReaded] = useState(false);
  const handleOnChangeIsReaded = () => {
    setIsReaded(true);
  };

  const handleSubmit = async () => {
    const statute = { isReaded: isReaded }
    await AsyncStorage.setItem('statute', JSON.stringify(statute))
    props.navigation.navigate({ name: 'Intro' });
  }

  return (
    <>
      <StatusBar hidden />
      <View style={styles.container}>
        <Text style={styles.inputTitle}>{StatuteJson[0].title}</Text>
        <Text>{StatuteJson[0].context}</Text>
          <RoundIconBtn antIconName="arrowright" onPress={handleSubmit} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputTitle: {
    alignSelf: 'flex-start',
    paddingLeft: 25,
    marginBottom: 5,
    opacity: 0.5,
  },
});


export default Statute;
