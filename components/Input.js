import React, {useState} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Input = props => {
  const [number, onChangeNumber] = useState('');

  return (
    <View style={[styles.inputContainer, props.style]}>
      {props.isSearch == 'true' ? (
        <Icon
          name="search"
          size={15}
          color="#155e6d"
          style={styles.searchIcon}
        />
      ) : (
        null
      )}
      <TextInput
        style={styles.textInput}
        onChangeText={onChangeNumber}
        value={number}
        placeholder={props.placeholder}
        placeholderTextColor="#155e6d"
        onChange={props.onChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#155e6d',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginLeft: 3,
    marginRight: 6,
  },
  textInput: {
    height: 'auto',
    padding: 0,
    margin: 0,
  },
});

export default Input;
