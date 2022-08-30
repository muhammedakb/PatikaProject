import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
