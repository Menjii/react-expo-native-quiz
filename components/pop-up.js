import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Modal from 'react-native-modal';

const PopUp = (props: any) => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const handleModal = () => setIsModalVisible(() => !isModalVisible);

  return (
    <View>
      <Modal isVisible={isModalVisible}>
        <View style={{ flex: 1 }}>
          <Text>Hello!</Text>
          <Button title="Hide modal" onPress={handleModal} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

export default PopUp;
