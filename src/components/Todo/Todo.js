import React from 'react';
import { Alert, Pressable, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';

const Todo = ({ isCompleted, todo, setTodoCompleted, removeTodo }) => {
  console.log('TODO RENDERING');
  return (
    <Pressable
      style={[
        styles.container,
        isCompleted ? styles.completed_container : null,
      ]}
      onPress={() => setTodoCompleted?.(todo)}
      onLongPress={() =>
        Alert.alert('Are you sure?', `${todo} will be deleted`, [
          {
            text: 'No',
            style: 'cancel',
          },
          {
            text: 'Yes',
            style: 'destructive',
            onPress: () => removeTodo?.(todo),
          },
        ])
      }>
      <Text style={[styles.text, isCompleted ? styles.completed_text : null]}>
        {todo}
      </Text>
    </Pressable>
  );
};

Todo.propTypes = {
  isCompleted: PropTypes.bool.isRequired,
  todo: PropTypes.string.isRequired,
  setTodoCompleted: PropTypes.func,
  removeTodo: PropTypes.func,
};

export default Todo;

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    height: 40,
    paddingLeft: 15,
    backgroundColor: '#7DA453',
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderRadius: 5,
  },
  completed_container: {
    backgroundColor: '#374750',
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
  completed_text: {
    color: '#6d7173',
    textDecorationLine: 'line-through',
  },
});
