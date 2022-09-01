import React, { useEffect, useRef, useState } from 'react';
import { Alert, Button, Pressable, Text, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './Todo.style';

const Todo = ({
  isCompleted,
  todo,
  editTodo,
  setTodoCompleted,
  removeTodo,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [text, setText] = useState('');

  const inputRef = useRef();

  useEffect(() => {
    isEdit && inputRef.current.focus();
  }, [isEdit]);

  const deleteTodo = () => {
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
    ]);
  };

  const completeEditTodo = () => {
    if (text.length > 0) {
      editTodo?.(todo, text);
      setIsEdit(false);
    } else {
      Alert.alert("Ha bu input'u doldurayisun");
    }
  };

  return isEdit ? (
    <View>
      <TextInput
        ref={inputRef}
        style={styles.container}
        onChangeText={setText}
        value={text}
      />
      <Button title="Kaydet" onPress={completeEditTodo} />
    </View>
  ) : (
    <Pressable
      style={[
        styles.container,
        isCompleted ? styles.completed_container : null,
      ]}
      onPress={() => setTodoCompleted?.(todo)}
      onLongPress={() =>
        Alert.alert('What would you like to do?', 'Edit or Delete', [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Edit',
            style: 'default',
            onPress: () => {
              setIsEdit(true);
            },
          },
          {
            text: 'Delete',
            style: 'destructive',
            onPress: deleteTodo,
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
  editTodo: PropTypes.func,
};

export default Todo;
