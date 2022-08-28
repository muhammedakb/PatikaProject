import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const TodoHeader = ({ numberOfThingsToDo }) => {
  console.log('HEADER RENDERING');
  return (
    <View style={styles.container}>
      {numberOfThingsToDo > 0 ? (
        <>
          <Text style={styles.text}>Yapılacaklar</Text>
          <Text style={styles.text}>{numberOfThingsToDo}</Text>
        </>
      ) : (
        <Text style={styles.text}>Tebrikler her şey tamam🥳</Text>
      )}
    </View>
  );
};

export default TodoHeader;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: '#FFA500',
    fontSize: 28,
    fontWeight: 'bold',
  },
});
