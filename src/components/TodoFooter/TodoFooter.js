import React, { memo } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './TodoFooter.style';

const TodoFooter = ({ text, setText, addTodo }) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Yapılacak..."
        style={styles.input}
        placeholderTextColor="#6d7173"
        onChangeText={newText => setText(newText)}
        value={text}
      />
      <Pressable style={styles.button} onPress={addTodo}>
        <Text style={styles.button_text}>Kaydet</Text>
      </Pressable>
    </View>
  );
};

TodoFooter.propTypes = {
  text: PropTypes.string.isRequired,
  setText: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
};

export default memo(TodoFooter);
