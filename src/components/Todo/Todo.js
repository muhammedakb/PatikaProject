import React from 'react';
import { Alert, Pressable, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './Todo.style';

const Todo = ({ isCompleted, todo, setTodoCompleted, removeTodo }) => {
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
