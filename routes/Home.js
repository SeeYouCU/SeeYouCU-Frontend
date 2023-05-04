import * as React from 'react';
import {Button, Dimensions, StyleSheet, ImageBackground} from 'react-native';
import UserMatch from '../components/UserMatch';

export default function Home({navigation}) {
  return (
    <ImageBackground
      source={require('../public/bg.png')}
      style={styles.container}>
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
      <Button title="Setup" onPress={() => navigation.navigate('Setup')} />
      <Button
        title="Interests"
        onPress={() => navigation.navigate('Interests')}
      />
      <Button title="Matching" onPress={() => navigation.navigate('Match')} />
      <Button
        title="Friends List"
        onPress={() => navigation.navigate('Friends')}
      />
      <Button
        title="Notification"
        onPress={() => navigation.navigate('Notification')}
      />
      <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
      <Button title="Events" onPress={() => navigation.navigate('Events')} />
      <Button
        title="Event (owner view)"
        onPress={() => {
          navigation.navigate('Event', {
            isOwner: true,
          });
        }}
      />
      {/* <Button
        title="Event (default view)"
        onPress={() => {
          navigation.navigate('Event');
        }}
      /> */}
      <Button
        title="New Event"
        onPress={() => navigation.navigate('NewEvent')}
      />
      <Button title="Add Tags" onPress={() => navigation.navigate('Tags')} />
      <Button
        title="Exchange"
        onPress={() => navigation.navigate('Exchange')}
      />
      <Button title="Add Tags" onPress={() => navigation.navigate('Tags')} />
      <Button
        title="Item (owner view)"
        onPress={() => {
          navigation.navigate('Item', {
            isOwner: true,
          });
        }}
      />
      {/* <Button
        title="Item (default view)"
        onPress={() => {
          navigation.navigate('Item');
        }}
      /> */}

      <Button title="New Item" onPress={() => navigation.navigate('NewItem')} />
      <Button
        title="Settings"
        onPress={() => navigation.navigate('Settings')}
      />
      <Button
        title="Account"
        onPress={() => navigation.navigate('Account')}
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
