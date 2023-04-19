import * as React from 'react';
import {Button, Dimensions, StyleSheet, ImageBackground} from 'react-native';
import {View, Text} from 'react-native';

export default function Home({navigation}) {
  return (
    <ImageBackground
      source={require('../public/bg.png')}
      style={styles.container}>
      <Button
        title="Go to Interests"
        onPress={() => navigation.navigate('Interests')}
      />
      <Button
        title="Go to Match"
        onPress={() => navigation.navigate('Match')}
      />
      <Button
        title="Go to Setup"
        onPress={() => navigation.navigate('Setup')}
      />
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      />
      <Button
        title="Go to Add Tags"
        onPress={() => navigation.navigate('Tags')}
      />
      <Button
        title="Go to Notification"
        onPress={() => navigation.navigate('Notification')}
      />
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
