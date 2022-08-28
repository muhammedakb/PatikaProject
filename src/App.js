/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useMemo, useState } from 'react';
import { Alert, FlatList, SafeAreaView, StyleSheet } from 'react-native';
import Todo from './components/Todo/Todo';
import TodoFooter from './components/TodoFooter/TodoFooter';
import TodoHeader from './components/TodoHeader/TodoHeader';

const App = () => {
  const [todos, setTodos] = useState([
    { isCompleted: true, todo: 'Zort' },
    { isCompleted: true, todo: 'Lakaka' },
    { isCompleted: false, todo: 'Koşu yapılacak' },
    { isCompleted: true, todo: 'React native' },
    { isCompleted: false, todo: 'Css' },
  ]);

  const [text, setText] = useState('');

  const activeTodos = useMemo(
    () => todos?.filter(todo => !todo.isCompleted).length,
    [todos],
  );

  const changeTodoState = value => {
    setTodos(prevState =>
      prevState.map(({ todo, isCompleted }) => {
        if (todo === value) {
          isCompleted = !isCompleted;
        }
        return { todo, isCompleted };
      }),
    );
  };

  const addTodo = () => {
    const isAlreadyHave = todos.filter(
      todo => todo.todo.toLowerCase() === text.toLowerCase(),
    );
    if (isAlreadyHave.length > 0) {
      Alert.alert(
        'Change your todo',
        `${isAlreadyHave[0].todo} is already exists`,
        [{ text: 'I Understand', style: 'cancel', onPress: () => setText('') }],
      );
    } else {
      setTodos([...todos, { isCompleted: false, todo: text }]);
      setText('');
    }
  };

  const removeTodo = todoValue => {
    setTodos(prevState => prevState.filter(({ todo }) => todo !== todoValue));
  };

  const renderTodos = ({ item }) => (
    <Todo
      isCompleted={item.isCompleted}
      todo={item.todo}
      setTodoCompleted={changeTodoState}
      removeTodo={removeTodo}
    />
  );
  return (
    <SafeAreaView style={styles.page_container}>
      <TodoHeader numberOfThingsToDo={activeTodos} />
      <FlatList data={todos} renderItem={renderTodos} />
      <TodoFooter text={text} setText={setText} addTodo={addTodo} />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  page_container: {
    height: '100%',
    backgroundColor: '#0F2027',
  },
});
