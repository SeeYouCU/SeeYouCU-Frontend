import * as React from 'react';
import {Button, Dimensions, StyleSheet, ImageBackground} from 'react-native';
import {View, Text} from 'react-native';
import Login from './Login.js';
import Setup from './Setup.js';

export default function Home({ navigation }) {
  return (
    <ImageBackground
      source={require('../public/bg.png')}
      style={styles.container}>
      <Button title="Go to Match" onPress={() => navigation.navigate('Match')} />
      <Button title="Go to Setup" onPress={() => navigation.navigate('Setup')} />
      <Button title="Go to Login" onPress={() => navigation.navigate('Login')} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    resizeMode: 'cover',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    flex: 1,
  },
});
