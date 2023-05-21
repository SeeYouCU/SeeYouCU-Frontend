import {React, useEffect, useState} from 'react';
import axios from 'axios';

import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';

import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

export default function Login({navigation}) {
  // const [loggedIn, setloggedIn] = useState(false);
  const [getUserInfo, setUserInfo] = useState([]);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '175282312397-s2jkpdm3rd5qqaieh03q5aq4cgl9phol.apps.googleusercontent.com',
      offlineAccess: true,
      forceCodeForRefreshToken: true,
    });
  });

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setUserInfo(userInfo.user.email);
      console.log(userInfo.user.email);
      axios.post(`http://localhost:8080/api/auth/loginGoogle`,{"email": "6338194021@student.chula.ac.th"}) //"test11@gmail.com"
        .then(response => {
          navigation.navigate('Match');
        })
        .catch(error => {
          if (error.response.status === 404) {
            console.log('User does not exist');
            navigation.navigate('Setup', {'email': userInfo.user.email});
          }
          console.error(error);
        });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('User cancelled the login flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Signing in');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Play services not available');
      } else {
        console.log('Some other error happened');
        console.log(error.message);
        console.log(error.code);
      }
    }
  };

  return (
    <ImageBackground
      source={require('../public/bg-home.png')}
      styles={styles.bg}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={require('../public/logo.png')} styles={styles.logo} />
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={styles.logoHandContainer} />
          <Image
            source={require('../public/logohand.png')}
            styles={styles.logoHand}
          />
          <View style={styles.logoHandContainer} />
        </View>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={signIn}
          activeOpacity={0.5}>
          <Image
            source={require('../public/google.png')}
            style={styles.buttonImageIconStyle}
          />
          <Text style={styles.buttonTextStyle}>Continue with Google</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    padding: '10%',
  },
  logoContainer: {
    alignSelf: 'center',
    margin: 15,
  },
  logoHandContainer: {
    flex: 1,
    height: 3,
    backgroundColor: 'white',
    margin: '2%',
  },
  buttonStyle: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 10,
    height: '5%',
    margin: '5%',
    backgroundColor: '#a3e1e3',
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowRadius: 2,
    shadowColor: 'black',
    elevation: 4,
  },
  buttonImageIconStyle: {
    height: 15,
    width: 15,
    resizeMode: 'stretch',
  },
  buttonTextStyle: {
    color: '#155e6d',
    fontWeight: '800',
    fontSize: 13,
    marginLeft: 10,
  },
});
