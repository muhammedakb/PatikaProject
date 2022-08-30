import React from 'react';
import { Text, View } from 'react-native';
import styles from './TodoHeader.style';

const TodoHeader = ({ numberOfThingsToDo }) => {
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
