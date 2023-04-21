import * as React from 'react';
import {Button, Dimensions, StyleSheet, ImageBackground} from 'react-native';
import UploadProfilePic from '../components/UploadProfilePic';
import ToggleSwitch from '../components/ToggleSwitch';

export default function Home({navigation}) {
  return (
    <ImageBackground
      source={require('../public/bg.png')}
      style={styles.container}>
      <Button
        title="Go to Match"
        onPress={() => navigation.navigate('Match')}
      />
      <Button
        title="Go to ProfileSetup"
        onPress={() => navigation.navigate('ProfileSetup')}
      />
      <UploadProfilePic />
      <ToggleSwitch rightTitle="Added You" leftTitle="Discover"></ToggleSwitch>
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
