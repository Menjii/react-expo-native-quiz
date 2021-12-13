import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

const NameInput = (props: any) => {
  const [name, onChangeName] = React.useState("What's your name?");

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeName}
        value={name}
        placeholder="name"
        keyboardType="numeric"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    textAlign: "center",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default NameInput;