import * as React from 'react';

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

_signIn = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const {accessToken, idToken} = await GoogleSignin.signIn();
    setloggedIn(true);
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
      alert('Sign in cancelled');
    } else if (error.code === statusCodes.IN_PROGRESS) {
      alert('In progress');
      // operation (f.e. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      alert('Play services not available');
      // play services not available or outdated
    } else {
      // some other error happened
    }
  }
};

export default function Login({navigation}) {
  const [loggedIn, setloggedIn] = React.useState(false);
  const [userInfo, setuserInfo] = React.useState([]);

  React.useEffect(() => {
    GoogleSignin.configure({
      scopes: ['email'], // what API you want to access on behalf of the user, default is email and profile
      webClientId:
        '418977770929-g9ou7r9eva1u78a3anassxxxxxxx.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    });
  }, []);

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
          // onPress={this._signIn} TODO
          onPress={() => navigation.navigate('Setup')}
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
