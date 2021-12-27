import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Dimensions,
} from 'react-native';
import RoundIconBtn from '../round-icon-btn';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';

const Intro = (props: any) => {
  const [name, setName] = useState('');
  const handleOnChangeText = (text) => {
    setName(text);
  };

  const handleSubmit = async () => {
    const user = { name: name }
    await AsyncStorage.setItem('user', JSON.stringify(user))
    props.navigation.navigate({ name: 'Menu' });
  }

  return (
    <>
      <StatusBar hidden />
      <View style={styles.container}>
        <Text style={styles.inputTitle}>What is your name </Text>
        <TextInput
          value={name}
          onChangeText={handleOnChangeText}
          placeholder="Enter Name"
          style={styles.textInput}
        />
        {name.trim().length >= 3 ? (
          <RoundIconBtn antIconName="arrowright" onPress={handleSubmit} />
        ) : null}
      </View>
    </>
  );
};

const width = Dimensions.get('window').width - 50;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    borderWidth: 2,
    borderColor: 'purple',
    color: 'black',
    width,
    height: 50,
    borderRadius: 10,
    paddingLeft: 15,
    fontSize: 25,
    marginBottom: 15,
  },
  inputTitle: {
    alignSelf: 'flex-start',
    paddingLeft: 25,
    marginBottom: 5,
    opacity: 0.5,
  },
});

export default Intro;
