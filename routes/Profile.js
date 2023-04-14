import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import ProfileCard from '../components/ProfileCard';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Match({navigation}) {
  return (
    <ImageBackground
      source={require('../public/bg.png')} // TODO: vinze - slider button
      style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')} // TODO: reroute later
        style={styles.iconButton}>
        <Icon name="chevron-back" size={32} color="#155e6d" />
      </TouchableOpacity>
      <ProfileCard
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/191125_Taylor_Swift_at_the_2019_American_Music_Awards.png/440px-191125_Taylor_Swift_at_the_2019_American_Music_Awards.png"
        nickname="Taylor"
        event="Finding a Friend"
        age="22"
        faculty="BALAC"
        major="French"
        class="Chula 104"
        bio="Hi, I'm the problem it's me"
        isMatch="false"
        interests={[
          'Basketball',
          'Tennis',
          'Marvel Movies',
          'Comics',
          'Music',
          'Science',
        ]}
      />
      <View
        style={{
          width: 'auto',
          height: '10%',
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={[styles.button2, {width: '100%', height: '70%'}]} // TODO: reroute later, fix dimensions?
        >
          <Text style={styles.buttonText}>Chat</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    resizeMode: 'cover',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    flex: 1,
    padding: '5%',
  },
  iconButton: {
    height: 'auto',
    marginBottom: '2%',
  },
  button2: {
    marginTop: '5%',
    borderColor: 'white',
    borderRadius: 60,
    backgroundColor: '#8ddee1',
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowRadius: 2,
    shadowColor: 'black',
    elevation: 4,
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 20,
  },
});
