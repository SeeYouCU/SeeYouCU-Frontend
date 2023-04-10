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

    <View style={styles.container}>
      <View style={styles.logoContainer}>
      <Image source={require('../public/logo.png')} styles={styles.logo}/>
      </View>
      
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={styles.logoHandContainerLeft} />
        <View styles={styles.logoHandContainer}>
          <Image source={require('../public/logohand.png')} styles={styles.logoHand}/>
        </View>
        <View style={styles.logoHandContainerRight}/>
      </View>
      
      <TouchableOpacity style={styles.buttonStyle} onPress={this._signIn} activeOpacity={0.5}>
        <Image source={require('../public/google.png')} style={styles.buttonImageIconStyle}/>
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
  },
  logoContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    margin: 15,
  },
  logoHandContainer: {

  },
  logoHandContainerLeft: {
    flex: 1,
    height: 3,
    backgroundColor: 'white',
    marginLeft: '10%',
    marginRight: '2%',
  },
  logoHandContainerRight: {
    flex: 1,
    height: 3,
    backgroundColor: 'white',
    marginLeft:'2%',
    marginRight: '10%',
  },
  buttonStyle: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    width: '80%',
    borderWidth: 2,
    borderColor: '#fff',
    height: 40,
    borderRadius: 5,
    margin: 10,
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