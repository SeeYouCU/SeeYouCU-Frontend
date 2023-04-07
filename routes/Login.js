import * as React from 'react';

import {
  Text,
  View,
  Button,
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
      alert('Cancel');
    } else if (error.code === statusCodes.IN_PROGRESS) {
      alert('Signin in progress');
      // operation (f.e. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      alert('PLAY_SERVICES_NOT_AVAILABLE');
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
    <ImageBackground source={require('../public/bg.png')} styles={styles.bg}>
        <View styles={styles.container}>
            <TouchableOpacity style={styles.buttonStyle} onPress={this._signIn} activeOpacity={0.5}>
              <Image source={require('../public/google.png')} style={styles.buttonImageIconStyle}/>
              <Text style={styles.buttonTextStyle}>Continue with Google</Text>
            </TouchableOpacity>
        </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    resizeMode: 'stretch',
  },
  buttonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    width: '80%',
    borderWidth: 2,
    borderColor: '#fff',
    height: 40,
    borderRadius: 5,
    margin: 5,
  },
  buttonImageIconStyle: {
    padding: 10,
    margin:  0,
    height: 15,
    width: 15,
    resizeMode: 'stretch',
  },
  buttonTextStyle: {
    color: '#000',
    marginBottom: 0,
    marginLeft: 10,
  },
});