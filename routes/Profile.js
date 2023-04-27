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
      source={require('../public/bg.png')}
      style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.iconButton}>
        <Icon name="chevron-back" size={32} color="#155e6d" />
      </TouchableOpacity>
      <ProfileCard
        src="https://assets.entrepreneur.com/content/3x2/2000/1396294231-why-college-students-need-entrepreneurial-careers.jpg"
        nickname="John"
        event="Finding a Friend"
        age="22"
        faculty="Language Arts"
        major="French"
        class="Chula 104"
        bio="Nice to meet you!"
        isMatch="false"
        interests={[
          'Basketball',
          'Tennis',
          'Marvel Movies',
          'Comics',
          'Music'
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
    borderWidth: 1,
    borderColor: '#ade7e9',
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
