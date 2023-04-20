import * as React from 'react';
import {Button, Dimensions, StyleSheet, ImageBackground} from 'react-native';

export default function Home({navigation}) {
  return (
    <ImageBackground
      source={require('../public/bg.png')}
      style={styles.container}>
      <Button
        title="Interests"
        onPress={() => navigation.navigate('Interests')}
      />
      <Button title="Match" onPress={() => navigation.navigate('Match')} />
      <Button title="Setup" onPress={() => navigation.navigate('Setup')} />
      <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
      <Button title="Add Tags" onPress={() => navigation.navigate('Tags')} />
      <Button
        title="Event (owner view)"
        onPress={() => {
          navigation.navigate('Event', {
            isOwner: true,
          });
        }}
      />
      <Button
        title="Event (default view)"
        onPress={() => {
          navigation.navigate('Event');
        }}
      />
      <Button
        title="Item (owner view)"
        onPress={() => {
          navigation.navigate('Item', {
            isOwner: true,
          });
        }}
      />
      <Button
        title="Item (default view)"
        onPress={() => {
          navigation.navigate('Item');
        }}
      />
      <Button
        title="Exchange"
        onPress={() => navigation.navigate('Exchange')}
      />
      <Button title="Events" onPress={() => navigation.navigate('Events')} />
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
