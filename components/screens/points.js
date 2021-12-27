import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View, FlatList, SafeAreaView } from 'react-native';

const Item = ({nick, score, type, date}) => (
  <View>
    <Text>{nick}</Text>
    <Text>{score}</Text>
    <Text>{type}</Text>
    <Text>{date}</Text>
  </View>
);

const Points = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://tgryl.pl/quiz/results')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
  }, []);

  const renderItem = ({item}) => (
    <Item
      nick={item.nick}
      score={item.score}
      type={item.type}
      date={item.createdOn}
    />
  );

    return (
      <SafeAreaView>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    paddingHorizontal: 30,
  },
});

export default Points;