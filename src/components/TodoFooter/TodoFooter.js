import React, { memo } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';

const TodoFooter = ({ text, setText, addTodo }) => {
  console.log('FOOTER RENDERING');
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#374750',
    height: 100,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 10,
    padding: 15,
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: '#4C5F69',
    color: '#fff',
    fontSize: 16,
    paddingBottom: 5,
  },
  button: {
    width: '80%',
    height: 35,
    marginLeft: '10%',
    backgroundColor: '#808080',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  button_text: {
    color: '#fff',
    fontSize: 16,
  },
});
