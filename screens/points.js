import React from 'react';
import { StyleSheet, View } from 'react-native';
import { DataTable } from 'react-native-paper';

import PointsTable from '../points-table.json';

const Points = (props: any) => {
  return (
    <View style={styles.container}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Nick</DataTable.Title>
          <DataTable.Title>Point</DataTable.Title>
          <DataTable.Title>Type</DataTable.Title>
          <DataTable.Title>Date</DataTable.Title>
        </DataTable.Header>
        {PointsTable.map((value, index) => {
          return (
            <DataTable.Row key={index}>
              <DataTable.Cell>{ value.nick }</DataTable.Cell>
              <DataTable.Cell>{ value.score }/{ value.total }</DataTable.Cell>
              <DataTable.Cell>{ value.type }</DataTable.Cell>
              <DataTable.Cell>{ value.date }</DataTable.Cell>
            </DataTable.Row>
          );
        })}
      </DataTable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    paddingHorizontal: 30,
  },
});

export default Points;
