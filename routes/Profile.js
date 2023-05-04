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

export default function Match({route, navigation}) {
  const {
    src,
    nickname,
    name,
    event,
    age,
    faculty,
    major,
    batch,
    bio,
    interests,
  } = route.params;

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
        src={src}
        nickname={nickname}
        name={name}
        event={event}
        age={age}
        faculty={faculty}
        major={major}
        class={batch}
        isMatch="false"
        bio={bio}
        interests={interests}
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
